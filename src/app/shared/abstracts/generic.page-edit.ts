import { ChangeDetectorRef, Directive, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EMPTY } from 'rxjs/internal/observable/empty';
import { finalize, map, switchMap, take } from 'rxjs/operators';
import { ConfirmService } from 'src/app/components/confirm';
import { LoadingService } from 'src/app/components/loading';
import { ToastService } from 'src/app/components/toast';

import { ConsultaCepService, ErrorHandlerService, ImageService } from '../services';
import { Cidade, Endereco, EstadoBr, Filters } from '../useful';
import { GenericService } from './generic.service';

@Directive()
export abstract class GenericPageEdit<T extends {id: string}, S extends GenericService<{ id: string }>> implements OnInit {

  object: T;
  filter = new Filters();
  id: string;
  formulario: FormGroup;
  estados: EstadoBr[];
  cidades: Cidade[];

  validateMsg = 'Erro de Validação';
  uploadProgress = 0;
  filePhoto: File;

  protected cd: ChangeDetectorRef;
  protected cepService: ConsultaCepService;
  protected confirm: ConfirmService;
  protected erroService: ErrorHandlerService;
  protected formBuilder: FormBuilder;
  protected imageService: ImageService;
  protected load: LoadingService;
  protected route: ActivatedRoute;
  protected router: Router;
  protected toast: ToastService;

  constructor(
    protected injector: Injector,
    protected service: S,
    protected urlImg: string,
    protected urlList: string
    ) {
    //this.auth = this.injector.get(AuthService);
    this.cd = this.injector.get(ChangeDetectorRef);
    this.cepService = this.injector.get(ConsultaCepService);
    this.confirm = this.injector.get(ConfirmService);
    this.erroService = this.injector.get(ErrorHandlerService);
    this.formBuilder = this.injector.get(FormBuilder);
    this.imageService = this.injector.get(ImageService);
    this.load = this.injector.get(LoadingService);
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.toast = this.injector.get(ToastService);
  }

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((parametros: Params) => {
      if (parametros.id === '0') {
        this.newRecord();
      } else {
        this.id = parametros.id;
        this.findById(this.id);
      }
    });
    this.getEstados()
    this.getCidades()
    this.listFactory();
  }

  findById(id: string) {
    this.service.getDoc(id).pipe(take(1)).subscribe((responseApi: any) => {
      this.object = responseApi;
      this.guardListAttrib();

      if (this.object.hasOwnProperty('address')) {
        // tslint:disable-next-line: no-string-literal
        this.cepService.getCidadeNome(this.object['address']['cidade']).subscribe(dados => this.cidades = dados);
      }

      this.formConstructorById().then((form) => {
        this.formulario = form;
        this.chageCitys();
      });

    }, err => {
      this.toast.danger(`Falha ao localizar documento!!: (${this.handleError(err)})`);
    });
   }

  newRecord() {
    this.formConstructorNew().then((form) => {
      this.formulario = form;
      this.chageCitys();
    });
  }

  onSubmit() {
    this.object = this.formulario.value;
    this.object.id = this.id;

    this.returnListAttrib();
    this.load.show({ message: 'Aguarde validação...' });
    this.validateData().then((result) => {
      this.load.dismiss();
      if (result) {
        if (!this.object.id) {
          delete this.object.id
          this.create(this.object);
        } else {
          if (this.filePhoto) {
            this.load.show({ message: 'Aguarde upload...' });
            const uploadTask = this.imageService.uploadImg(this.urlImg, this.filePhoto, this.object.id);

            uploadTask.percentageChanges().subscribe((percentagem: number) => {
              this.uploadProgress = Math.round(percentagem);
              this.cd.detectChanges();
            });

            uploadTask.snapshotChanges().pipe(finalize(() => {
                this.imageService.getURL(this.urlImg, this.object.id).subscribe( URL => {
                  this.object['url_perfil'] = URL;
                  this.update(this.object);
                })
              })
            ).subscribe();

          } else {
            this.load.show({});
            this.update(this.object);
          }
        }
      } else {
        this.toast.danger(this.validateMsg);
      }
    });
  }

  create(object: T) {
    this.service.create(object).then((responseApi) => {
      this.load.dismiss();
      this.toast.success('Registro efetuado com sucesso!');
      this.resetForm();
    }, erro => {
      this.toast.danger(`Erro: (${this.handleError(erro)})`);
    });
  }

  update(object: T) {
    this.service.update(object, object.id).then((responseApi) => {
      this.load.dismiss();
      this.toast.success('Edição realizada com sucesso!');
      this.filePhoto = undefined;
      this.uploadProgress = 0;
      this.cd.detectChanges();
    }, erro => {
      this.toast.danger(`Erro ao editar: (${this.handleError(erro)})`);
    });
  }

  onPhoto(event) {
    const loading = this.load;
    loading.show({});
    this.imageService.processImage(event.target.files).pipe(take(1)).subscribe((res) => {
      this.filePhoto = res.data;
    }, err => { }, () => { loading.dismiss(); });
  }

  async guardListAttrib() {
  }

  async returnListAttrib() {
  }

  async validateData() {
    return true;
  }

  async formConstructorById() {
   return this.formBuilder.group({
    });
  }

  async formConstructorNew() {
    return this.formBuilder.group({
    });
  }

  resetForm() {
    this.formulario.reset();
  }

  chageCitys() {
    if (this.object !== undefined && this.object.hasOwnProperty('address')) {
      this.formulario.get('address.estado').valueChanges
      .pipe(
        map(estado => this.estados.filter(e => e.sigla === estado)),
        map(estados => estados && estados.length > 0 ? estados[0].id : EMPTY),
        switchMap((estadoId: number) => this.cepService.getCidades(estadoId)),
      )
      .subscribe(cidades => this.cidades = cidades);
    }
  }

  consultaCEP() {
    const cep = this.formulario.get('address.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep).pipe(take(1)).subscribe((address: Endereco) => {
        this.populaDadosForm(address);
      }, erro => console.log(this.handleError(erro)));
    }
  }

  populaDadosForm(address) {
    this.formulario.patchValue({
      address: {
        cep: address.cep,
        logradouro: address.logradouro,
        complemento: address.complemento,
        bairro: address.bairro,
        cidade: address.localidade,
        estado: address.uf
      }
    });
  }

  getEstados(){
    this.cepService.getEstadosBr().pipe(take(1)).subscribe(dados => this.estados = dados);
  }

  getCidades() {
    this.cepService.getCidades(6).subscribe(cidades => {
      this.cidades = cidades;
    });
  }

  listFactory() {}

  handleError(erro: any) {
    return this.erroService.handler(erro);
  }

  return() {
    this.router.navigate([this.urlList]);
  }
}

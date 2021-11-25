import { Directive, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { ConfirmService } from 'src/app/components/confirm';
import { LoadingService } from 'src/app/components/loading';
import { ToastService } from 'src/app/components/toast';
import { GenericService } from '../abstracts/generic.service';
import { ImageService } from '../services';
import { Filters } from '../useful';


@Directive()
export abstract class GenericPageList<T extends { id: string }, S extends GenericService<T>> implements OnInit {
  id: string;
  filter = new Filters();
  list: T[];

  offset = 5;
  lastObject: T;
  prevLists = []
  page=1;

  protected confirm: ConfirmService;
  protected load: LoadingService;
  protected relatorioService: S;
  protected imageService: ImageService;
  protected toast: ToastService;
  protected router: Router;

  search = '';

  constructor(
    protected injector: Injector,
    protected service: S,
    protected orderField: string
  ) {
    this.confirm = this.injector.get(ConfirmService);
    this.load = this.injector.get(LoadingService);
    this.toast = this.injector.get(ToastService);
    this.router = this.injector.get(Router);
  }

  ngOnInit() {
    this.getList();
    this.listFactory();
  }

  getList(key?) {
    this.load.show({ message: 'Coletando dados...' });
    this.service.getListPage(this.offset, key, this.orderField).pipe(take(1)).subscribe((response) => {
      this.list = response.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as T;
      })
      this.lastObject = this.list[this.list.length - 1];
      this.transformObjects().then((response) => {
        this.list = response;
      });
      this.load.dismiss();
    },
      (error) => {
        this.toast.danger(`Falha ao listar!! (${error.message})`);
        this.load.dismiss();
      }
    );
  }

  countPage(offset: number){
    this.offset = offset;
    this.getList();
  }

  nextPage() {
    this.prevLists.push(this.list);
    this.getList(this.lastObject['name']);
    this.page+=1;
  }

  prevPage() {
    if(this.prevLists[this.page-2]){
      this.list = this.prevLists[this.page-2];
    }
    this.prevLists.pop()
    this.lastObject = this.list[this.list.length - 1];
    this.page-=1;
  }

  openModalDelete(id: string, message: string) {
    this.id = id;
    this.confirm.show({
      message: `Deseja deletar ${message}`,
      siFn: () => {
        this.deletar();
      },
    });
  }

  deletar() {
    this.service.delete(this.id).then(() => {
      this.toast.success(`Exclusão realizada com sucesso!`);
      this.getList();
    },
      (err) => {
        this.toast.danger(`Falha ao deletar!! (${err.message})`);
      }
    );
  }

  listFactory() { }

  async transformObjects() {
    return this.list;
  }

}

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';

import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ProductService } from 'src/app/shared/services';
import { ItenOrder, Product } from '../../../../shared/models';

@Component({
  selector: 'app-itens-modal',
  templateUrl: './itens-modal.component.html',
  styleUrls: ['./itens-modal.component.scss']
})
export class ItensModalComponent implements OnInit {

  @ViewChild('modal') modal: ModalComponent;

  @Output() fnSave = new EventEmitter();

  products: Product[] = [];
  product: Product = { id: null, name: '', value: 0 };

  iten: ItenOrder;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProdcts();
    this.iten = { product: this.product, quantity: 0, amount: 0 }
  }

  open() { this.modal.open(); }

  getProdcts() {
    this.productService.getList().pipe(take(1)).subscribe((response) => {
      this.products = response.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Product;
      })
    })
  }

  refreshItem() {
    const iten = this.product
    this.iten.product = iten;
  }
  refreshValues() {
    this.iten.amount = this.iten.product.value * this.iten.quantity;
  }

  save() {
    this.fnSave.emit(this.iten);
    this.iten = { product: this.product, quantity: 0, amount: 0 }
    this.modal.onCloseHandled();
  }

}

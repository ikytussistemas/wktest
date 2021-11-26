import { Injector } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export abstract class GenericService<T extends { id: string }> {

  protected db: AngularFirestore;

  constructor(
    protected injector: Injector,
    protected collection: string,
  ) {
    this.db = this.injector.get(AngularFirestore);
  }

  getDoc(id: string) {
    return this.db
      .collection<T>(this.collection)
      .doc(id)
      .valueChanges()
  }

  getList() {
    return this.db
      .collection<T>(this.collection, ref => ref.orderBy('name'))
      .snapshotChanges();
  }

  getListPage(offset: number, startKey = '', orderField: string) {
    return this.db
      .collection<T>(this.collection, ref => ref.orderBy(orderField).startAfter(startKey).limit(offset))
      .snapshotChanges();
  }

  create(object: T) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection<T>(this.collection)
        .add(object)
        .then(response => { resolve(response) }, error => reject(error));
    });
  }

  delete(id: string) {
    return this.db
      .collection(this.collection)
      .doc(id)
      .delete();
  }

  update(object: T, id: string) {
    return this.db
      .collection<T>(this.collection)
      .doc(id)
      .update({
        ...object
      });
  }
}

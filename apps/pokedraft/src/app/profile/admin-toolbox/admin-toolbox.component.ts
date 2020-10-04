import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'pd-admin-toolbox',
  templateUrl: './admin-toolbox.component.html',
  styleUrls: ['./admin-toolbox.component.scss']
})
export class AdminToolboxComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
   //  this.setPokedex(fullpokedex);
   //  this.setItems(fullitems);
   //  this.setAbilities(testAbilities);
  }

  setPokedex(pokedex) {
    this.afs.doc(`static-data/pokedex`).set(
      { pokemon: pokedex }
    ).then(() => console.log('Updated pokedex'))
     .then(() => this.afs.doc('static-data/pokedex').get()
        .subscribe(snap => {
          console.log(snap.data().pokemon)
        }))
     .catch(err => console.error('Update Failed', err));
  }

  setItems(items) {
    this.afs.doc(`static-data/items`).set({ items })
      .then(() => console.log('Updated items'))
      .then(() => this.afs.doc('static-data/items').get()
        .subscribe(snap => {
          console.log(snap.data().items)
        }))
      .catch(err => console.error('Item Update Failed', err));
  }

  setAbilities(abilities) {
    this.afs.doc(`static-data/abilities`).set({ abilities })
      .then(() => console.log('Updated abilities'))
      .then(() => this.afs.doc('static-data/abilities').get()
        .subscribe(snap => console.log(snap.data().abilities))
      )
      .catch(err => console.error('Abilities update failed', err))
  }

}

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
    /*
    const pokedex = POKEDEX;
    this.afs.doc(`static-data/pokedex`).update(
      { pokemon: pokedex }
    ).then(() => console.log('Updated Pokedex'))
      .catch(() => console.error('Update Failed'));
    */
    this.afs.doc('static-data/pokedex').get()
      .subscribe(snap => {
        console.log(snap.data().pokemon)
      });
  }

}

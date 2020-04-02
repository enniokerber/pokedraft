import {DocumentChangeAction} from "@angular/fire/firestore";
import {pipe} from "rxjs";
import {map} from "rxjs/operators";

export const snapshotChangesToDocsWithId = <T>(changes: DocumentChangeAction<T>[]) => changes.map(
  change => ({
    id: change.payload.doc.id,
    ...change.payload.doc.data() as T
  })
);

export const snapshotChangesToDocsWithIdOperator = pipe(
  map(snapshotChangesToDocsWithId)
);

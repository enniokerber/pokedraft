import { Action, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import {pipe} from "rxjs";
import { map, tap } from 'rxjs/operators';

export const snapshotChangesToDocsWithId = <T>(changes: DocumentChangeAction<T>[]) => changes.map(
  change => ({
    id: change.payload.doc.id,
    ...change.payload.doc.data() as T
  })
);

export const allWithDocumentId = () => map(snapshotChangesToDocsWithId);

export const extractDocumentData = () => map((snapshot: Action<DocumentSnapshot<any>>) => snapshot.payload.data());

export const extractDocumentDataWithId = () => map((snapshot: Action<DocumentSnapshot<any>>) => ({
  id: snapshot.payload.id,
  ...snapshot.payload.data()
} as any));

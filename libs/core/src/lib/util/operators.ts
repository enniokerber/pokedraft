import { Action, DocumentChangeAction, DocumentSnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export const allWithDocumentId = () => map(
  <T>(changes: DocumentChangeAction<T>[]) =>
    changes.map(change => ({ id: change.payload.doc.id, ...change.payload.doc.data() as T}))
);

export const extractDocumentData = () => map((snapshot: Action<DocumentSnapshot<any>>) => snapshot.payload.data());

export const withDocumentId = () => map((snapshot: Action<DocumentSnapshot<any>>) => ({
  id: snapshot.payload.id,
  ...snapshot.payload.data()
} as any));

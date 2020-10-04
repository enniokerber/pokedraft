import { Action, DocumentChangeAction, DocumentData, DocumentSnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IPokemon } from '@pokedraft/teambuilder';

export const allWithDocumentId = () => map(
  <T>(changes: DocumentChangeAction<T>[]) =>
    changes.map(change => ({ id: change.payload.doc.id, ...change.payload.doc.data() as T}))
);

export const extractDataFromSnapshot = <T>(extractProperty?: string) => map((snapshot: DocumentSnapshot<T>) => (extractProperty ? snapshot.data()[extractProperty] : snapshot.data()));

export const extractDocumentData = () => map((snapshot: Action<DocumentSnapshot<any>>) => snapshot.payload.data());

export const withDocumentId = <T>() => map((snapshot: Action<DocumentSnapshot<T>>) => {
  const data = snapshot.payload.data();
  return data ? ({ id: snapshot.payload.id, ...snapshot.payload.data() } as T) : null;
});

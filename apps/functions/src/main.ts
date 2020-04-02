import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {IPokedraftLeague, IPokedraftUserSnippet, toLeagueSnippet} from "@pokedraft-fire/models";

admin.initializeApp(functions.config().firebase);


// create a user record in users collection after a user signed up
export const createUserRecord = functions.auth.user().onCreate(
  (user) => {
    const createUserDTO = {
      uid: user.uid,
      username: `Player-${Date.now().toString()}`,
      profilePicture: '',
      profileDescription: '',
      titles: [],
      draftPoints: 0,
      leagues: [],
      createdAt: new Date().toISOString()
    };

    const userRef = admin.firestore().collection(`users`).doc(user.uid);
    userRef.create(createUserDTO)
      .catch(error => console.log(`Error when trying to create a user record for user ${user.uid + ' | ' + user.email}: ${error}`));
  }
);

// add a league to the users league snippets when he creates one
export const addLeagueToUserRecord = functions.firestore.document(`leagues/{leagueId}`)
  .onCreate((snapshot, context) => {
    const league: IPokedraftLeague = snapshot.data() as IPokedraftLeague;
    league.id = context.params.leagueId;
    const user: IPokedraftUserSnippet = snapshot.data().owner as IPokedraftUserSnippet;
    const userRef = admin.firestore().doc(`users/${user.uid}`);
    console.log('Created League: ', JSON.stringify(league));
    userRef.update({
      leagues: admin.firestore.FieldValue.arrayUnion(toLeagueSnippet(league))
    });
  })
;

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

export const createUserRecord = functions.auth.user().onCreate(
  user => {
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

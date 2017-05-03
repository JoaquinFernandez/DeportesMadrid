import * as firebase from 'firebase';

export function initFirebase(firebaseConfig) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  return firebaseApp;
}

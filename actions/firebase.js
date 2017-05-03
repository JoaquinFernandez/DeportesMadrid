import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAa8-I1pTAYLXN3wevuyPrCVE6nWu8nMrE",
  authDomain: "deportesmadrid-ios.firebaseapp.com",
  databaseURL: "https://deportesmadrid-ios.firebaseio.com",
  projectId: "deportesmadrid-ios",
  storageBucket: "deportesmadrid-ios.appspot.com",
  messagingSenderId: "799932750810"
};

export function initFirebase(isShow) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  return firebaseApp;
}

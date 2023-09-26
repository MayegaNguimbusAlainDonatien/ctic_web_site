import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase

const firebaseConfig = {
  apiKey: "AIzaSyCxzSltKlzSAxX_HpeTHo6oxSkRKTpZngg",
  authDomain: "camermarket-f8e93.firebaseapp.com",
  projectId: "camermarket-f8e93",
  storageBucket: "camermarket-f8e93.appspot.com",
  messagingSenderId: "607975725684",
  appId: "1:607975725684:web:a15ce4a481916e6e1d8f21"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//signIn with googleAuthProvider
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' }); // fonction qui configure le lancement du popup
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider); //fonction de lancement du popup de google

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};

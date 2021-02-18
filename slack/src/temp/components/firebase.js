// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAAO6smN1ghZJzS8SHR4uTbdV08dQqoAXU",
    authDomain: "slack-clone-3d962.firebaseapp.com",
    projectId: "slack-clone-3d962",
    storageBucket: "slack-clone-3d962.appspot.com",
    messagingSenderId: "814938669463",
    appId: "1:814938669463:web:80a2b51c0fb01c3a32c4d2",
    measurementId: "G-E6PBSPN9GF"
  };


const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export{ auth, provider};
export default db;


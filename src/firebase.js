import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCPDy2SKMLhUx56rBNoNxvwApQBwGQgEAw",
    authDomain: "facebook-clone-ba070.firebaseapp.com",
    databaseURL: "https://facebook-clone-ba070.firebaseio.com",
    projectId: "facebook-clone-ba070",
    storageBucket: "facebook-clone-ba070.appspot.com",
    messagingSenderId: "900700737204",
    appId: "1:900700737204:web:be054183e751e79e7fd1e1",
    measurementId: "G-3R0JM8MVF5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
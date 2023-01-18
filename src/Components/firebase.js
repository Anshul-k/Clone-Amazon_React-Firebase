import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAnv0l8-bBM_l7SwHqig0ZO4Fqahtpn6BQ",
    authDomain: "clone-reactjs-firebase-1fa46.firebaseapp.com",
    projectId: "clone-reactjs-firebase-1fa46",
    storageBucket: "clone-reactjs-firebase-1fa46.appspot.com",
    messagingSenderId: "913207955395",
    appId: "1:913207955395:web:66f242e09445a87743b776",
    measurementId: "G-6KC3Z9QSPW"
});

const auth = firebase.auth();

export { auth };
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAMR8FMlVT3K7n-XyWe20M8wm5TsLKR5Yo",
  authDomain: "react-todolist-8942d.firebaseapp.com",
  projectId: "react-todolist-8942d",
  storageBucket: "react-todolist-8942d.appspot.com",
  messagingSenderId: "631624849661",
  appId: "1:631624849661:web:e49411b1de17e0a307c694",
  measurementId: "G-8XQ9LR3SVN"
};

firebase.initializeApp(firebaseConfig);
const firestore = new firebase.firestore();

export { firestore } ;


import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCs4ILMJxgC_ROpSAFfK3D7tRj9uLpXRPY',
  authDomain: 'c-estlebouquet.firebaseapp.com',
  projectId: 'c-estlebouquet',
  storageBucket: 'c-estlebouquet.appspot.com',
  messagingSenderId: '280745235312',
  appId: '1:280745235312:web:5277f40e4f187d144235b5',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBw538L4XdbxzUdruyoa-3IEb07_CXW1ec',
  authDomain: 'moneytracker-e9874.firebaseapp.com',
  databaseURL: 'https://moneytracker-e9874-default-rtdb.firebaseio.com',
  projectId: 'moneytracker-e9874',
  storageBucket: 'moneytracker-e9874.appspot.com',
  messagingSenderId: '92932003874',
  appId: '1:92932003874:web:7c7da7e9a8afa5f9af527b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

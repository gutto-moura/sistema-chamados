import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {

    apiKey: "AIzaSyCAaQrKmEI_zby8uOrfqcuKPl6eJb3pT7s",
    authDomain: "sistema-chamados-78996.firebaseapp.com",
    projectId: "sistema-chamados-78996",
    storageBucket: "sistema-chamados-78996.appspot.com",
    messagingSenderId: "351820383103",
    appId: "1:351820383103:web:c7b7ff553615d43a0a904a",
    measurementId: "G-DBZHRBH7DT"
  
  };
  
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyDRFQ_eJkXCsPRqbKy-7V92qiY-D0F6YOE",
    authDomain: "attendance-app-4db4a.firebaseapp.com",
    databaseURL: "https://attendance-app-4db4a-default-rtdb.firebaseio.com",
    projectId: "attendance-app-4db4a",
    storageBucket: "attendance-app-4db4a.appspot.com",
    messagingSenderId: "236289618872",
    appId: "1:236289618872:web:f08ac91371000ce1a3954d"
  };


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();

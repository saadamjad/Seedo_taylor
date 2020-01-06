import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCks4OCuEij4GGu6J7MF6F41JyfL_u4Qek",
    authDomain: "seedotaylor.firebaseapp.com",
    databaseURL: "https://seedotaylor.firebaseio.com",
    projectId: "seedotaylor",
    storageBucket: "seedotaylor.appspot.com",
    messagingSenderId: "695009139304",
    appId: "1:695009139304:web:29d672a02d24a244db39dd",
    measurementId: "G-1QZ2L4HFLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBxKQupgym2nHbKxzWNQ87nKr4oinWth-A",
  authDomain: "sbuilder-c99b3.firebaseapp.com",
  projectId: "sbuilder-c99b3",
  storageBucket: "sbuilder-c99b3.appspot.com",
  messagingSenderId: "517468120049",
  appId: "1:517468120049:web:18d9e00b7e664fe9099a50"
};

var app: firebase.app.App = firebase.initializeApp(firebaseConfig);

var database: firebase.database.Database = app.database();
var storage: firebase.storage.Storage = app.storage();

export { database, storage };

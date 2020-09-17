import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	apiKey: "AIzaSyCgazkZxX8NZtfPtOPw_spRZD8dZrp2keY",
	authDomain: "todo-react-app-5cd4b.firebaseapp.com",
	databaseURL: "https://todo-react-app-5cd4b.firebaseio.com",
	projectId: "todo-react-app-5cd4b",
	storageBucket: "todo-react-app-5cd4b.appspot.com",
	messagingSenderId: "733521493380",
	appId: "1:733521493380:web:37781d0939741d237b71d1",
	measurementId: "G-H008VCCC07"
});


const db = firebase.firestore();

export default db;
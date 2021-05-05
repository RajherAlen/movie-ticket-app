import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCjgkK-xPSQ7z6xaumvq1RaGRJ55bR5ADA",
	authDomain: "auth-lesson-9d043.firebaseapp.com",
	databaseURL: "https://auth-lesson-9d043.firebaseio.com",
	projectId: "auth-lesson-9d043",
	storageBucket: "auth-lesson-9d043.appspot.com",
	messagingSenderId: "713332858827",
	appId: "1:713332858827:web:9d8d0d79b0b3f73206a04e",
	measurementId: "G-6G5JJ2RQ1F",
};

// initialize firebase
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}

// Data base
const db = firebase.firestore();

// auth
const auth = firebase.auth();

export { auth };

export default db;

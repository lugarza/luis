// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBddX89sJBNyCCwcoo-A0PCHUx7EhOh_bI",
    authDomain: "portfolio-274bb.firebaseapp.com",
    databaseURL: "https://portfolio-274bb.firebaseio.com",
    projectId: "portfolio-274bb",
    storageBucket: "portfolio-274bb.appspot.com",
    messagingSenderId: "179254421430"
};
firebase.initializeApp(config);
export default firebase;
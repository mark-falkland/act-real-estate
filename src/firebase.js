import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDniQayNdwaPf8kJ4msV4RoOHP0WKSdhfI",
  authDomain: "portfolio-aa291.firebaseapp.com",
  databaseURL: "https://portfolio-aa291.firebaseio.com",
  projectId: "portfolio-aa291",
  storageBucket: "portfolio-aa291.appspot.com",
  messagingSenderId: "589340883620"
};
firebase.initializeApp(config);

const db = firebase.firestore()

export default db
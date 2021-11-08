import firebase from "firebase";

 const firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyBSBDOs7jppD6ruJDZb0ZAO5ShhiIIG5Ow",
        authDomain: "e-commerce-c18f3.firebaseapp.com",
        projectId: "e-commerce-c18f3",
        storageBucket: "e-commerce-c18f3.appspot.com",
        messagingSenderId: "625930610191",
        appId: "1:625930610191:web:4cb6773cc3da1aa5e4257a",
        measurementId: "G-R4E0PQS0TD"
      };
 }
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
export { auth };
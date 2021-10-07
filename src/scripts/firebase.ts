// NPM packages
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCh5aw_FI0fV-DKsATrGaMH8O9Q7ACvSiI",
  authDomain: "bbq-ribs-house.firebaseapp.com",
  projectId: "bbq-ribs-house",
  storageBucket: "bbq-ribs-house.appspot.com",
  messagingSenderId: "95999964309",
  appId: "1:95999964309:web:809b656f87b743c2ab179c",
};

const firebaseInstance = initializeApp(firebaseConfig);

export default firebaseInstance;

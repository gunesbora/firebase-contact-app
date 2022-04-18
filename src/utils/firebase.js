// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAi26IJR4IDfosz8AwVdqMXX46Mql8Y5fM",
  authDomain: "fir-contact-app-df0df.firebaseapp.com",
  databaseURL: "https://fir-contact-app-df0df-default-rtdb.firebaseio.com",
  projectId: "fir-contact-app-df0df",
  storageBucket: "fir-contact-app-df0df.appspot.com",
  messagingSenderId: "169964214876",
  appId: "1:169964214876:web:90cfe1afa112397c202499"
};


const firebase = initializeApp(firebaseConfig);

export default firebase;


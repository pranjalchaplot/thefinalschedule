import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6adgrgNrWqa8puqjxu3kgRKJhSxfZuCY",
    authDomain: "thefinalschedule.firebaseapp.com",
    projectId: "thefinalschedule",
    storageBucket: "thefinalschedule.appspot.com",
    messagingSenderId: "172185959778",
    appId: "1:172185959778:web:66ca7444ce19024423c03b"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


export {db};
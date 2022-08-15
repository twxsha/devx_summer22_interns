// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth,  onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';


const firebaseConfig = {

  apiKey: "AIzaSyAhycTezGQYeGPPTTukN8gsdI1E4lKZ9XE",

  authDomain: "devx-summer-22.firebaseapp.com",

  projectId: "devx-summer-22",

  storageBucket: "devx-summer-22.appspot.com",

  messagingSenderId: "1023675117386",

  appId: "1:1023675117386:web:7d3d3444a72a7ce5751bb3",

  measurementId: "G-QFN5JYLV8N"

};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


console.log("hihi")

onAuthStateChanged(auth,user=>{
  if(user != null) {
    console.log("logged in!");
  }else{
    console.log('No user');
  }
})



const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  console.log(citySnapshot);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
  return cityList;
}

(getCities(db));
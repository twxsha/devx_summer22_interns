import { initializeApp } from "firebase/app";


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

export default app;
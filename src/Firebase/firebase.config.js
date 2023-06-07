// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeRLI0pw_3AxOt3GRgzabx4dHuEhMC6aA",
  authDomain: "golden-tunes-d016b.firebaseapp.com",
  projectId: "golden-tunes-d016b",
  storageBucket: "golden-tunes-d016b.appspot.com",
  messagingSenderId: "648523815085",
  appId: "1:648523815085:web:76ac5f12c25dc952c2ce24",
};
// TODO : dotenv
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

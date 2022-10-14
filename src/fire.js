import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBapr2EcwayA2HBaUcmOHQAGnXg7hr8Nws",
    authDomain: "saper-result.firebaseapp.com",
    projectId: "saper-result",
    storageBucket: "saper-result.appspot.com",
    messagingSenderId: "239092641266",
    appId: "1:239092641266:web:5a30b5d691f85f8b710f6b",
    measurementId: "G-ZFN4X94TMW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;
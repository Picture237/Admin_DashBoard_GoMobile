import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBoHnZom3l7N_-jUF2sJHfyuwEkVib2eGg",
    authDomain: "gomobile-dashboard.firebaseapp.com",
    projectId: "gomobile-dashboard",
    storageBucket: "gomobile-dashboard.appspot.com",
    messagingSenderId: "523821775692",
    appId: "1:523821775692:web:3f29cfceb5a651a9936de9"
};

const fire = initializeApp(firebaseConfig);

export default fire;
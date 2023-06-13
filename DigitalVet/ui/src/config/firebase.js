import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "",
    authDomain: "licenta-c5734.firebaseapp.com",
    projectId: "licenta-c5734",
    storageBucket: "licenta-c5734.appspot.com",
    messagingSenderId: "846951967816",
    appId: "1:846951967816:web:9578c40f3f5d366278bc7d",
    measurementId: "G-GQ2F2V11NY"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
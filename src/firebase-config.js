import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAPGqWmkXeE5_NqmDC7twJ48ZCMFGBWV5k",
    authDomain: "last-epoch-merchant-c124a.firebaseapp.com",
    databaseURL: "https://last-epoch-merchant-c124a-default-rtdb.firebaseio.com",
    projectId: "last-epoch-merchant-c124a",
    storageBucket: "last-epoch-merchant-c124a.appspot.com",
    messagingSenderId: "351159186074",
    appId: "1:351159186074:web:db995e08b710c9b2246523",
    measurementId: "G-NCH5CZKSW3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
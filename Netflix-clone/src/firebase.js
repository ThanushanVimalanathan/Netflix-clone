// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwfozhX4yBh6IFwi4ImsqZTMW275ZeyrY",
  authDomain: "netflix-clone-3351d.firebaseapp.com",
  projectId: "netflix-clone-3351d",
  storageBucket: "netflix-clone-3351d.firebasestorage.app",
  messagingSenderId: "481358988058",
  appId: "1:481358988058:web:12c34e6a4a3c637f0162a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);//get authentication

const db = getFirestore(app);//get database

const signup = async (name,email,password) => {

    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        });
  
    } catch (error) {
        console.log(error);
        alert(error);
        
    }
    
}


const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        alert(error);
        
    }
}

const logout =  ()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout};
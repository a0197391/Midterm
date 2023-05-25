{/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBqgXj2lGga4EJrTMZ8yZY_pmjBohzoOhE",
    authDomain: "mujiku-userdata.firebaseapp.com",
    projectId: "mujiku-userdata",
    storageBucket: "mujiku-userdata.appspot.com",
    messagingSenderId: "89663828926",
    appId: "1:89663828926:web:c3325d3dda253b82b37fef",
    measurementId: "G-D4N58WSXE0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> */}
import { getFirestore,collection,addDoc, getDocs, deleteDoc, setDoc, doc  } from "firebase/firestore";
import { getApps, getApp, initializeApp } from 'firebase/app'
import images from "../assets/json/pictures.json"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
  };

  
const app_length = getApps().length > 0 ;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imagesCollection = collection(db, "images");

export const feedImages = async () => {
    // DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(imagesCollection);
    querySnapshot.forEach(async (image) => {
        await deleteDoc(doc(db, "images", image.id));
    });
    // ADD NEW DOCS
    images.forEach(async (image) => {
        const docRef = await doc(imagesCollection);
        await setDoc(docRef, { ...image });
    });
};

//use in react_query
export const getImages = async () => {
    let querySnapshot = await getDocs(imagesCollection);

    // Convert the query to a json array.
    let result = [];
    querySnapshot.forEach(async (image) => {
        await result.push(image.data());
    });
    console.log({ result });
    return result;
};

//use in react_query
export const getImagesById = async ({ queryKey }) =>{
    const [id] = queryKey;
    const docRef = await doc(db,"images",id);
    const docSnap = await getDocs(docRef);
    return docSnap.data();
};
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_BMB_API_KEY,
    authDomain: import.meta.env.VITE_BMB_AUTHDOMAIN_KEY,
    projectId: import.meta.env.VITE_BMB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_BMB_STORAGE_BUCKET_KEY,
    messagingSenderId: import.meta.env.VITE_BMB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_BMB_APP_ID
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app
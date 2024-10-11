import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY as string,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN as string,
    databaseURL: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL as string,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROHECT_Id as string,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID as string,
    measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID as string
  };
  
  const app = initializeApp(firebaseConfig);
  const fireBaseDB = getDatabase(app);

  export { fireBaseDB };
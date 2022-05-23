import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwdwrot_TeWxDGfG-fOmzpsmhHt5MC2Io',
  authDomain: 'food-app-70c94.firebaseapp.com',
  projectId: 'food-app-70c94',
  storageBucket: 'food-app-70c94.appspot.com',
  messagingSenderId: '413408189581',
  appId: '1:413408189581:web:176c3569029affa4fd16c4',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const googleAuthProvider = new GoogleAuthProvider();

export {database, googleAuthProvider};

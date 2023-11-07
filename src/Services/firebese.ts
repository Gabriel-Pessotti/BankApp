import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
import { firebase } from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBFhSh4aJkKOAdX-QT8NhUJ-fc3Ty1-PkU',
  authDomain: 'financeapi-b2e4c.firebaseapp.com',
  projectId: 'financeapi-b2e4c',
  storageBucket: 'financeapi-b2e4c.appspot.com',
  messagingSenderId: '303558338488',
  appId: '1:303558338488:android:8b2846b0c9badca452114d',
};


const app = initializeApp(firebaseConfig);
export const aut = getAuth(app);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
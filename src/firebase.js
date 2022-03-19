import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyA6HXjLiK5WgqbuQ7ZkIl6pfzw1KoP2jIk',
	authDomain: 'octopus-67f62.firebaseapp.com',
	projectId: 'octopus-67f62',
	storageBucket: 'octopus-67f62.appspot.com',
	messagingSenderId: '27144563273',
	appId: '1:27144563273:web:d9a16acde6ea7b3e646d98',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

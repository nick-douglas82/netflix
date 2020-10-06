import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCr12kBv1wIBNdYLQi-LnDKfpB_u8-otdk',
  authDomain: 'netflix-8267e.firebaseapp.com',
  databaseURL: 'https://netflix-8267e.firebaseio.com',
  projectId: 'netflix-8267e',
  storageBucket: 'netflix-8267e.appspot.com',
  messagingSenderId: '406264026613',
  appId: '1:406264026613:web:9c67bb34ac2c008e077cbc',
};
const firebase = Firebase.initializeApp(config);

export { firebase };

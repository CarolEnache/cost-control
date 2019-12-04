import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAs1K3BKgkcdLShgN8rRbP44sJPH-VnIPI',
  authDomain: 'cost-control-46ad2.firebaseapp.com',
  databaseURL: 'https://cost-control-46ad2.firebaseio.com',
  projectId: 'cost-control-46ad2',
  storageBucket: 'cost-control-46ad2.appspot.com',
  messagingSenderId: '433695748792',
  appId: '1:433695748792:web:16e480a23ff13781affa4d',
  measurementId: 'G-XNK5TQ5F0H'
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
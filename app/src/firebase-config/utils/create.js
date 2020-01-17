import firebase from '../firebase';

const db = firebase.firestore();

const createFirestoreItem = (collection, item) => {
  try {
    db.collection(collection).add(item);
  } catch (e) {
    console.error(e);
  }
};

export default createFirestoreItem;

import firebase from '../firebase';

const db = firebase.firestore();

const deleteFirestoreItem = (collection, id) => {
  try {
    db.collection(collection).doc(id).delete();
  }
  catch (e) {
    console.error(e);
  }
}

export default deleteFirestoreItem;

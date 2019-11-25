import firebase from '../firebase';

const db = firebase.firestore();

const updateFirestoreItem = (collection, item) => {
  try {
    const { id, ...ingredient } = item;
    db.collection(collection).doc(id).update(ingredient);
  }
  catch (e) {
    console.error(e);
  }
};

export default updateFirestoreItem;

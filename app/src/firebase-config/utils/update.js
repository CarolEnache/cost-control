import firebase from '../firebase';

const db = firebase.firestore();

const updateFirestoreItem = (collection, item) => {
  try {
    const { currentItemId, ...ingredient } = item;
    db.collection(collection)
      .doc(currentItemId)
      .update(ingredient);
  } catch (e) {
    console.error(e);
  }
};

export default updateFirestoreItem;

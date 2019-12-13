import { useEffect, useContext } from 'react';
import firebase from '../firebase';
import { DispatchContext } from '../../App';

const db = firebase.firestore();

const useFetchList = (COLLECTION)  => {
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchListItems = async (COLLECTION, { signal }) => {
      let notUpdate = false;

      if (signal) {
        signal.addEventListener('abort', event => notUpdate = true);
      }

      await db.collection(COLLECTION).onSnapshot(snapshot => {
        const collection = {
          list: snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        }

        if (!notUpdate) {
          dispatch({ type: COLLECTION, list: collection.list})
        }
      });
    }
    fetchListItems(COLLECTION, { signal })
    return () => abortController.abort();
  }, [dispatch, COLLECTION]);
}

export default useFetchList;

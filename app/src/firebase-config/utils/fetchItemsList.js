import { useEffect, useContext } from 'react';
import firebase from '../firebase';
import { DispatchContext } from '../../App';

const db = firebase.firestore();

const useFetchList = (collection)  => {
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchListItems = async (collection, { signal }) => {
      let notUpdate = false;

      if (signal) {
        signal.addEventListener('abort', event => notUpdate = true);
      }

      await db.collection(collection).onSnapshot(snapshot => {
        const collection = {
          list: snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        }

        if (!notUpdate) {
          console.log('data was fetched', collection)
          dispatch({ type: 'GET_LIST', list: collection.list})
        }
      });
    }
    fetchListItems(collection, { signal })
    return () => abortController.abort();
  }, [dispatch, collection]);
}

export default useFetchList;

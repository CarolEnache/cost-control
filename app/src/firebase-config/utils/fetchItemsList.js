import { useEffect, useContext } from 'react';
import firebase from '../firebase';
import { DispatchContext } from '../../App';

const db = firebase.firestore();

const useFetchList = (collection)  => {
  // const [list, setList] = useState(initialState)
  const dispatch = useContext(DispatchContext)

  useEffect(() => {
    dispatch({ type: 'TEST' })
    const abortController = new AbortController()
    const signal = abortController.signal

    const fetchListItems = async (data, { signal }) => {
      let notUpdate = false;

      if (signal) {
        signal.addEventListener('abort', event => notUpdate = true);
      }

      await db.collection(data).onSnapshot(snapshot => {
        const ingredientsCollection = {
          list: snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }))
        }

        if (!notUpdate) {
          dispatch({ type: 'GET_LIST', list: ingredientsCollection.list})
        }
      });
    }
    fetchListItems(collection, { signal })
    return () => abortController.abort();
  }, []);
}

export default useFetchList;

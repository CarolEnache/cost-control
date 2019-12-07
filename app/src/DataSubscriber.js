import useFetchList from './firebase-config/utils/fetchItemsList';

const SubscribeToDB = (collection) => {
  let col = collection.length ? collection : 'ingredients_list'
  useFetchList(col)
  return null
}

export default SubscribeToDB;
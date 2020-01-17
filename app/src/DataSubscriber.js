import useFetchList from './firebase-config/utils/fetchItemsList';

const SubscribeToDB = props => {
  const isCollectionProvided = props.collection !== '';
  let COLLECTION_LIST = isCollectionProvided
    ? props.collection
    : 'ingredients_list';
  useFetchList(COLLECTION_LIST);
  return null;
};

export default SubscribeToDB;

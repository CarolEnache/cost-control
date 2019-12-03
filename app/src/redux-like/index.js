export const initialState = {
  list: [],
  currentItem: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        list: action.list
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        currentItem: {
          collection: action.collection,
          id: action.id
        }
      }
    default:
      return state;
  }
}
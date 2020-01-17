export const initialState = {
  list: [],
  currentItem: {},
  collection: 'ingredients_list'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        list: action.list
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        currentItem: {
          collection: action.collection,
          id: action.id
        }
      };
    case 'CLEAR_CURRENT_ITEM':
      return {
        ...state,
        currentItem: {}
      };
    case 'DISPLAY_INGREDIENTS':
      return {
        ...state,
        collection: 'ingredients_list'
      };
    case 'DISPLAY_RECIPES':
      return {
        ...state,
        collection: 'recipe_list'
      };
    default:
      return state;
  }
};

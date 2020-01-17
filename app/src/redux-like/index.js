export const initialState = {
  ingredientsList: [],
  recipesList: [],
  currentItem: {},
  collection: 'ingredients_list'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ingredients_list':
      return {
        ...state,
        ingredientsList: action.list
      };
    case 'recipe_list':
      return {
        ...state,
        recipesList: action.list
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

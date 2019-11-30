export const initialState = {
  silicon: true
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        silicon: false
      }
    default:
      return state;
  }
}
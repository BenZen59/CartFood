const initialState = [];

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_CART':
      state.push({ nom: 'test', age: 24 });
      JSON.parse(localStorage.getItem(state));
      localStorage.setItem(state, JSON.stringify(state));
      console.log(state);
      return state;
    case 'REMOVE_CART':

    case 'ADD_QUANTITY':

    case 'REMOVE_QUANTITY':

    case 'CANCEL':
      console.log('annuler');

    case 'PAY':
    default:
      return state;
  }
};

export default cartReducer;

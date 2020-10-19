const initState = {
  cards: [
    { id: "1", fullName: 'Rajovic Mirko', cardNumber: '4444 4444 4444 4444', expDate: '02/22'},
    { id: "2", fullName: 'Rajovic Mirko', cardNumber: '5555 5555 5555 5555', expDate: '05/22'},
    { id: "3", fullName: 'Rajovic Mirko', cardNumber: '6666 6666 6666 6666', expDate: '10/22'}
  ]
};

const auth = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    // ADD CARD REDUCER
    case "ADD_CARD":
      return {
        ...state,
        isLoading: true
      }
    case "ADD_CARD_ERROR":
      return {
        ...state,
        isLoading: false
      }
    case "ADD_CARD_SUCCESS":
      return { 
        cards: payload,
        isLoading: false
      }

    // EDIT CARD REDUCER
    case "EDIT_CARD":
      return {
        ...state,
        isLoading: true
      }
    case "EDIT_CARD_ERROR":
      return {
        ...state,
        isLoading: false
      }
    case "EDIT_CARD_SUCCESS":
      return {
        cards: payload,
        isLoading: false
      }
  
    default:
      break;
  }
  return state;
};

export default auth;

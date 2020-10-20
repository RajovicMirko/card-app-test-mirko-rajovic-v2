const initState = {
  cards: [],
};

const auth = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    // GET CARDS REDUCER
    case "GET_CARDS":
      return {
        ...state,
        isLoading: true
      }
    case "GET_CARDS_ERROR":
      return {
        ...state,
        isLoading: false
      }
    case "GET_CARDS_SUCCESS":
      return {
        cards: payload ? payload : [] ,
        isLoading: false
      }

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

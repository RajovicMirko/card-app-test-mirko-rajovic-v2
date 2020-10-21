import visaLogo from '../../assets/files_1050346_1023544_visa_01-0a31cd6ab1ed6e52a0f65646ae4b0070-eeb4f4.png'
import discoverLogo from '../../assets/files_1050346_1023544_discovercard-166021f728ac0d4cc1bdf8a5d7def67e-3ea92c.png'
import masterLogo from '../../assets/files_1050346_1023544_mastercard-eb9215199829ef5e3ad671b7b3289480-ce80c8.png'

const initState = {
  cards: null,
  logos: {
    "4": {
      name: 'visa', // ADDED BECOUSE OF CREDIT CARD LOGO CSS STYLEING
      logo: visaLogo
    },
    "5": {
      name: 'master', // ADDED BECOUSE OF CREDIT CARD LOGO CSS STYLEING
      logo: masterLogo
    },
    "6": {
      name: 'discover', // ADDED BECOUSE OF CREDIT CARD LOGO CSS STYLEING
      logo: discoverLogo
    }
  },
  isLoading: false
};

const auth = (state = initState, action) => {
  const { type, payload } = action;
  let cards = null;

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
        ...state,
        cards: payload.length ? payload : null,
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
      cards = state.cards || [];
      cards.push(payload);

      return { 
        ...state,
        cards,
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
        ...state,
        cards: null,
        isLoading: false
      }
  
    default:
      break;
  }
  return state;
};

export default auth;

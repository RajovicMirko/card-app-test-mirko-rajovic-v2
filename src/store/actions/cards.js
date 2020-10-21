export const getCards = () => {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: 'GET_CARDS' })

    const payload = await api.cards.getCards();

    if(payload){
      dispatch({ type: 'GET_CARDS_SUCCESS', payload});
      return true;
    } else {
      dispatch({ type: 'GET_CARDS_ERROR' });
      return false;
    }
  }
}

export const addCard = (data) => {
  return async (dispatch, getState, { api }) => {
    if(data) {
      dispatch({ type: 'ADD_CARD' });

      const payload = await api.cards.addCard(getState(), data);

      if(payload){
        dispatch({ type: 'ADD_CARD_SUCCESS',  payload });
        return true;
      } else {
        dispatch({ type: 'ADD_CARD_ERROR' });
        return false;
      }
    }
  }
};

export const editCard = (data) => {
  return async (dispatch, getState, { api }) => {
    if(data) {
      dispatch({ type: 'EDIT_CARD' });

      const payload = await api.cards.editCard(getState(), data);

      if(payload){
        dispatch({ type: 'EDIT_CARD_SUCCESS',  payload });
        return true;
      } else {
        dispatch({ type: 'EDIT_CARD_ERROR' });
        return false;
      }
    }
  }
};

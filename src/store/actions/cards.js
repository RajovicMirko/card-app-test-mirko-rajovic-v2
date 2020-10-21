export const getCards = () => {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: 'GET_CARDS' })

    const payload = await api.cards.getCards();

    if(payload){
      dispatch({ type: 'GET_CARDS_SUCCESS', payload});
    } else {
      dispatch({ type: 'GET_CARDS_ERROR' });
    }
  }
}

export const addCard = (data) => {
  return async (dispatch, getState, { api }) => {
    return new Promise(async (resolve, reject) => {
      if(data) {
        dispatch({ type: 'ADD_CARD' });

        const payload = await api.cards.addCard(data);

        if(payload){
          dispatch({ type: 'ADD_CARD_SUCCESS', payload });
          resolve(true);
        } else {
          dispatch({ type: 'ADD_CARD_ERROR' });
          reject(false);
        }
      }
    });
  }
};

export const editCard = (data) => {
  return (dispatch, getState, { api }) => {
    return new Promise(async (resolve, reject) => {
      if(data) {
        dispatch({ type: 'EDIT_CARD' });

        const payload = await api.cards.editCard(data);
        if(payload){
          dispatch({ type: 'EDIT_CARD_SUCCESS', payload });
          resolve(true);
        } else {
          dispatch({ type: 'EDIT_CARD_ERROR' });
          reject(false);
        }
      }
    });
  }
};

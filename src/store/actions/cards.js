export const getCards = () => {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: "GET_CARDS" });

    const payload = await api.cards.getCards();

    if (payload) {
      await dispatch({ type: "GET_CARDS_SUCCESS", payload });
    } else {
      dispatch({ type: "GET_CARDS_ERROR" });
    }
  };
};

export const addCard = (data, callback = null) => {
  return async (dispatch, getState, { api }) => {
    if (data) {
      dispatch({ type: "ADD_CARD" });

      const payload = await api.cards.addCard(data);

      if (payload) {
        await dispatch({ type: "ADD_CARD_SUCCESS", payload });
        if (callback) callback();
      } else {
        dispatch({ type: "ADD_CARD_ERROR" });
      }
    }
  };
};

export const editCard = (data, callback = null) => {
  return async (dispatch, getState, { api }) => {
    if (data) {
      dispatch({ type: "EDIT_CARD" });

      const payload = await api.cards.editCard(data);
      if (payload) {
        await dispatch({ type: "EDIT_CARD_SUCCESS", payload });
        if (callback) callback();
      } else {
        dispatch({ type: "EDIT_CARD_ERROR" });
      }
    }
  };
};

export const getCardById = (id, callback = null) => {
  return async (dispatch, getState, { api }) => {
    dispatch({ type: "GET_CARD_BY_ID" });

    const payload = await api.cards.getCardById(id);
    if (payload) {
      await dispatch({ type: "GET_CARD_BY_ID_SUCCESS", payload });
      if (callback) callback(payload);
    } else {
      dispatch({ type: "GET_CARD_BY_ID_ERROR" });
    }
  };
};

export const deleteCard = (id, callback = null) => {
  return async (dispatch, getState, { api }) => {
    if (id) {
      dispatch({ type: "DELETE_CARD" });

      const payload = await api.cards.deleteCard(id);
      if (payload) {
        await dispatch({ type: "DELETE_CARD_SUCCESS", payload });
        if (callback) callback();
      } else {
        dispatch({ type: "DELETE_CARD_ERROR" });
      }
    }
  };
};

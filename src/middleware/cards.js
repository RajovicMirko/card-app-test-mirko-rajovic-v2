import http from "../utils/axios";
const urlBase = "/cards";

// URL /cards
const getCards = async () => {
  try {
    const url = urlBase;
    const payload = await http("get", url);
    return payload.data;
  } catch (error) {
    return error;
  }
};

const addCard = async (data) => {
  try {
    const url = urlBase;
    const payload = await http("post", url, data);
    return payload.data;
  } catch (error) {
    return error;
  }
};

// URL /cards/:id
const editCard = async (data) => {
  try {
    const newData = {
      fullName: data.fullName,
      cardNumber: data.cardNumber,
      expDate: data.expDate,
    };
    const url = `${urlBase}/${data.id}`;
    const payload = await http("put", url, newData);
    return payload.data;
  } catch (error) {
    return error;
  }
};

const getCardById = async (id) => {
  try {
    const url = `${urlBase}/${id}`;
    const payload = await http("get", url);
    return payload.data;
  } catch (error) {
    return error;
  }
};

const deleteCard = async (id) => {
  try {
    const url = `${urlBase}/${id}`;
    const payload = await http("delete", url);
    return payload.data;
  } catch (error) {
    return error;
  }
};

export default {
  getCards,
  addCard,
  editCard,

  getCardById,
  deleteCard,
};

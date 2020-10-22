import http from '../utils/axios';

// URL /cards
const getCards = async () => {
  try {
    const url = '/cards';
    const payload = await http('get', url);
    return payload.data;

  } catch (error) {
    return error;
  }
}

const addCard = async (data) => {
  try {
    const url = '/cards';
    const payload = await http('post', url, data);
    return payload.data;

  } catch (error) {
    return error;
  }
}

const editCard = async (data) => {
  try {
    const newData = {
      fullName: data.fullName,
      cardNumber: data.cardNumber,
      expDate: data.expDate
    }
    const url = `/cards/${data.id}`;
    const payload = await http('put', url, newData);
    return payload.data;
    
  } catch (error) {
    return error;
  }
}

// URL /cards/:id
const getCardById = async (id) => {
  try {
    const url = `/cards/${id}`;
    const payload = await http('get', url);
    return payload.data;
  } catch (error) {
    return error;
  }
}

export default {
  getCards,
  addCard,
  editCard,
  getCardById
}
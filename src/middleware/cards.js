import http from '../utils/axios';

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
    const url = `/cards/${data.id}`;
    const payload = await http('put', url, data);
    return payload.data;
    
  } catch (error) {
    return error;
  }
}

export default {
  getCards,
  addCard,
  editCard
}
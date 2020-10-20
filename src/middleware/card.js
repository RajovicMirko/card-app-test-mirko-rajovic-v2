import { LocalStorage } from '../utils/localStorage';

const WAIT_TIME = 500;
const LS_CARDS_KEY = 'cards'

const getCards = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = LocalStorage.get(LS_CARDS_KEY)
      resolve(data);
    }, WAIT_TIME);
  })
}

const addCard = (state, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newCards = state.cards.cards;
      newCards.push(data)

      LocalStorage.removeThenSet(LS_CARDS_KEY, newCards)
      resolve(newCards)
    }, WAIT_TIME);
  })
}

const editCard = (state, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const localCards = state.cards.cards;
      const newCards = localCards.map(card => {
        if(card.id === data.id){
          return data;
        } else {
          return card;
        }
      })
      
      LocalStorage.removeThenSet(LS_CARDS_KEY, newCards)
      resolve(newCards)
    }, WAIT_TIME)
  })
}

export default {
  getCards,
  addCard,
  editCard
}
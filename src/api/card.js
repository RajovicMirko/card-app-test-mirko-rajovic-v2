const WAIT_TIME = 1000;

const addCard = (state, data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newCards = state.cards.cards;
      newCards.push(data)

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
      resolve(newCards)
    }, WAIT_TIME)
  })
}

export default {
  addCard,
  editCard
}
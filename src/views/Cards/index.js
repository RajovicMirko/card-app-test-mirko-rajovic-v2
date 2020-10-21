import React, { Component } from 'react'

import {connect} from 'react-redux'

// ACTIONS
import { getCards } from '../../store/actions/cards';

// COMPONENTS
import { getComponent } from '../../components/componentsMap';

class CardsPage extends Component {
  componentDidMount(){
    if(!this.props.cards) this.props.getCards();
  }

  render() {
    const { history, cards, isLoading } = this.props;
    
    return (
      <div className="container">
        <div className="my-cards page page-center py-5">
          <h2 className="text-muted mb-5">My Cards</h2>
          <div className="cards-list d-flex flex-wrap justify-content-around">
          { !!cards && cards.map(card => {
              return (   
                getComponent({
                  component: 'credit-card',
                  key: card.id,
                  id: card.id,
                  fullName: card.fullName,
                  cardNumber: card.cardNumber,
                  expDate: card.expDate,
                  handleClick: () => history.push(`/cards/${card.id}/edit`)
                })
              )
            })}

            { !cards && <div className="w-100 text-center mb-2"><span className="h6 text-muted">Welcome, start adding your cards.</span></div>}
            
            { cards && cards.length <= 1 && <div className='w-100' /> }

            { getComponent({
              component: 'credit-card-add'
            })}

            { getComponent({ component: 'loading-full-page', isLoading, colors: ['red', 'green', 'blue'] }) }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    getCards: () => dispatch(getCards())
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(CardsPage)
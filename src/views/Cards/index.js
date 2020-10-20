import React, { Component } from 'react'

import {connect} from 'react-redux'

// ACTIONS
import { getCards } from '../../store/actions/cards';

// COMPONENTS
import { getComponent } from '../../components/componentsMap';

class index extends Component {
  componentDidMount(){
    if(!this.props.cards.length) this.props.getCards();
  }

  render() {
    const { history, cards, isLoading } = this.props;
    
    return (
      <div className="container">
        <div className="my-cards page page-center py-5">
          <h2 className="text-muted mb-5">My Cards</h2>
          <div className="cards-list d-flex flex-wrap justify-content-around">
            { cards && cards.map(card => {
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

export default connect(mapStateToProps, mapDispatchToProps)(index)
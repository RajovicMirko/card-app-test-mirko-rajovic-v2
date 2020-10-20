import "./credit-card.scss"

import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"

import cardChip from '../../assets/files_1050346_1023544_chip-8feb50fbaf1103ec7e20e39eb13c98fa-3dcbaa.png'

function index(props) {
  const { logos, fullName, cardNumber, expDate, handleClick} = props;
  const firstCardNumberDigit = cardNumber && cardNumber[0];
  
  const getLogo = () => {
    if(Object.keys(logos).indexOf(firstCardNumberDigit) !== -1){
      return logos[firstCardNumberDigit].logo;
    }
    return null;
  }

  const cardLogo = getLogo();

  return (
    <div className="credit-card" onClick={handleClick}>
      <div className="card-logo">
        { cardLogo && <img className={logos[firstCardNumberDigit].name} src={cardLogo} alt="Card logo" /> }
      </div>
      <div className="card-chip">
        <img src={cardChip} alt="Card chip" />
      </div>
      <div className="card-number">
        <h2>{cardNumber}</h2>
      </div>
      <div className="credit-card-footer d-flex align-items-between justify-content-between">
        <div className="footer-wrapper">
          <h4 className="card-username">{ fullName }</h4>
          <h4 className="card-exp">{ expDate }</h4>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    logos: state.cards.logos
  }
}

export default connect(mapStateToProps)(withRouter(index));

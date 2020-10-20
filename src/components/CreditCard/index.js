import "./credit-card.scss"

import React from 'react'
import { withRouter } from 'react-router-dom'

import visaLogo from '../../assets/files_1050346_1023544_visa_01-0a31cd6ab1ed6e52a0f65646ae4b0070-eeb4f4.png'
import discoverLogo from '../../assets/files_1050346_1023544_discovercard-166021f728ac0d4cc1bdf8a5d7def67e-3ea92c.png'
import masterLogo from '../../assets/files_1050346_1023544_mastercard-eb9215199829ef5e3ad671b7b3289480-ce80c8.png'
import cardChip from '../../assets/files_1050346_1023544_chip-8feb50fbaf1103ec7e20e39eb13c98fa-3dcbaa.png'

function index(props) {
  const { fullName, cardNumber, expDate, handleClick} = props;
  const firstCardNumberDigit = cardNumber && cardNumber[0];

  const logoMap = {
    "4": visaLogo,
    "5": masterLogo,
    "6": discoverLogo,
  }
  
  const getLogo = () => {
    return logoMap[firstCardNumberDigit];
  }

  return (
    <div className="credit-card" onClick={handleClick}>
      <div className="card-logo">
        { firstCardNumberDigit && <img className={`card-${firstCardNumberDigit}`} src={getLogo()} alt="Card logo" /> }
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

export default withRouter(index)

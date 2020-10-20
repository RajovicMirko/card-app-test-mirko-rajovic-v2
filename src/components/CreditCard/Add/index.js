import React from 'react'

import { withRouter } from 'react-router-dom'

function CreditCardAdd(props) {
  const { history } = props;
  
  const handleClick = () => {
    history.push(`/cards/add`)
  }

  return (
    <div className="credit-card-add d-flex justify-content-center align-items-center" onClick={handleClick}>
      <i className="fas fa-plus"></i>
    </div>
  )
}

export default withRouter(CreditCardAdd)

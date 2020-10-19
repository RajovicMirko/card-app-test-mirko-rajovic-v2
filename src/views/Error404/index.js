import React from 'react'

import {withRouter} from 'react-router-dom'
import { getComponent } from '../../components/componentsMap'

function index(props) {
  const handleClick = () => props.history.goBack();

  return (
    <div className="container">
      <div className="error-page page page-center mt-5">
        <div className="text-center">
          <i className="far fa-exclamation-triangle"></i>
          <div className="display-1 my-4">404</div>
          <div className="display-4 my-4">Not Found</div>
          <h6>The resource requested could not be found on this server!</h6>
          { 
            getComponent({
              component: 'button',
              text: "Go back",
              addClass: 'btn btn-primary',
              onClick: handleClick
            })
          }
        </div>
      </div>
    </div>
  )
}

export default withRouter(index)
import React from 'react'

function Notification(props) {
  const { position, color, title, message } = props;

  return (
    <div className={`notification-wrapper ${position ? position : 'top'}`}>
      <div className={`card ${color ? color : 'primary'}`}>
        <div className="title">{title}</div>
        <hr />
        <div className="card-body">{message}</div>
      </div>
    </div>
  )
}

export default Notification

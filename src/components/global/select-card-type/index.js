import React from 'react'

function index({id, label, addClassLabel, cardType, onChange}) {
  return (
    <React.Fragment>
      <label htmlFor={id} className={`${addClassLabel}`}>{label}</label>
      <select className="form-control form-control-sm mb-3" id={id} defaultValue={cardType} onChange={onChange}>
        <option value="visa">Visa</option>
        <option value="discover">Discover</option>
        <option value="master">Master</option>
      </select>
    </React.Fragment>
  )
}

export default index

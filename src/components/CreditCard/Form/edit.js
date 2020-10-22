export const creditCardForm = (state, handleChange = null, handleClick = null) => {
  const { inputs, errors } = state;

  return [
    { 
      component: 'input',
      id: "fullName",
      label: "Name",
      addClassLabel: 'mb-0',
      type: "text",
      value: inputs.fullName,
      error: errors.fullName,
      onChange: handleChange
    },
    {
      component: 'input-card-number',
      id: "cardNumber",
      label: "Card Number",
      addClassLabel: 'mb-0',
      cardNumber: inputs.cardNumber,
      error: errors.cardNumber,
      onChange: handleChange
    },
    { 
      component: 'input',
      id: "expDate",
      label: "Expires on",
      addClassLabel: 'mb-0',
      type: "text",
      value: inputs.expDate,
      error: errors.expDate,
      onChange: handleChange
    },
    {
      component: 'button',
      type: "submit",
      addClass: "btn btn-primary mt-3",
      text: "Save"
    },
    {
      component: 'button',
      type: "button",
      addClass: "btn btn-danger mt-3",
      onClick: handleClick,
      text: "Delete"
    }
  ]
} 
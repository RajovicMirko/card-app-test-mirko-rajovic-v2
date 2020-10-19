import './input-card-number.scss';
import React, { Component } from 'react'

import Input from '../input'

export default class index extends Component {
  constructor(props){
    super(props)
    const num = props.cardNumber ? props.cardNumber.split(" ") : '';
    this.state = {
      cardNumber1: num[0] || '',
      cardNumber2: num[1] || '',
      cardNumber3: num[2] || '',
      cardNumber4: num[3] || ''
    }
  }
  
  handleChange = (event) => {
    const state = this.state;
    state[event.target.id] = event.target.value;

    this.setState({ state })


    if(event.target.value.length === 4 && event.target.id !== 'cardNumber4'){
        const fieldNum = Number(event.target.id.slice(-1));
        document.querySelector(`#cardNumber${fieldNum + 1}`).focus()
    }

    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = this.state;
    const newCardNumber = `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`;
    const localEvent = {
      target: {
        id: 'cardNumber',
        value: newCardNumber.trim()
      }
    }

    this.props.onChange(localEvent);
  }
  
  render() {
    const { cardNumber1, cardNumber2, cardNumber3, cardNumber4 } = this.state;
    const { addClassLabel, error } = this.props;

    return (
      <React.Fragment>
        <label htmlFor="cardNumber" className={`${addClassLabel}`}>Card number</label>
        <div id="cardNumber" className={`input-card-number ${error && 'is-invalid'}`}>
          <Input
            id="cardNumber1"
            type="text"
            addClass="m-0"
            value={cardNumber1}
            maxlength={4}
            hasError={error}
            onChange={this.handleChange}
          />
          <Input
            id="cardNumber2"
            type="text"
            addClass="m-0"
            value={cardNumber2}
            maxlength={4}
            hasError={error}
            onChange={this.handleChange}
          />
          <Input
            id="cardNumber3"
            type="text"
            addClass="m-0"
            value={cardNumber3}
            maxlength={4}
            hasError={error}
            onChange={this.handleChange}
          />
          <Input
            id="cardNumber4"
            type="text"
            addClass="m-0"
            value={cardNumber4}
            maxlength={4}
            hasError={error}
            onChange={this.handleChange}
          />
        </div>
        <small className="text-danger mb-3">{ error }</small>
      </React.Fragment>
    )
  }
}

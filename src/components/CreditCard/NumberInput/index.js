import "./input-card-number.scss";
import React, { Component } from "react";

import Input from "../../global/input";

export default class CreditCardNumberInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber0: "",
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
    };
    this.inputRefs = [];
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cardNumber && this.props.cardNumber) {
      const [
        cardNumber0,
        cardNumber1,
        cardNumber2,
        cardNumber3,
      ] = this.props.cardNumber.split(" ");

      this.setState({
        cardNumber0,
        cardNumber1,
        cardNumber2,
        cardNumber3,
      });
    }
  }

  handleChange = (event) => {
    const state = this.state;
    state[event.target.id] = event.target.value;

    this.setState({ ...state });

    if (event.target.value.length === 4 && event.target.id !== "cardNumber3") {
      const fieldNum = Number(event.target.id.slice(-1)) + 1;
      this.inputRefs[fieldNum].focus();
    }

    const newCardNumber = Object.values(this.state).join(" ");
    const localEvent = {
      target: {
        id: "cardNumber",
        value: newCardNumber.trim(),
      },
    };

    this.props.onChange(localEvent);
  };

  render() {
    const { addClassLabel, error } = this.props;

    return (
      <React.Fragment>
        <label htmlFor="cardNumber" className={`${addClassLabel}`}>
          Card number
        </label>
        <div
          id="cardNumber"
          className={`input-card-number ${error && "is-invalid"}`}
        >
          {Object.keys(this.state).map((key, i) => (
            <Input
              key={key}
              forwardRef={(ref) => (this.inputRefs[i] = ref)}
              id={`cardNumber${i}`}
              type="text"
              addClass="m-0"
              value={this.state[key]}
              maxlength={4}
              hasError={error}
              onChange={this.handleChange}
            />
          ))}
        </div>
        <small className="text-danger mb-3">{error}</small>
      </React.Fragment>
    );
  }
}

import "./input-card-number.scss";
import React, { Component } from "react";

import Input from "../../global/input";

export default class CreditCardNumberInput extends Component {
  #numberPartsCount = 4;
  #singleInputLengthLimit = 4;

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: Array.from(
        { length: this.#numberPartsCount },
        (val, i) => ""
      ),
    };
    this.inputRefs = [];
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.cardNumber && this.props.cardNumber) {
      const cardNumber = this.props.cardNumber.split(" ");
      this.setState({ cardNumber });
    }
  }

  focusNextInput = (curentInputLength, nextFieldId) => {
    if (
      curentInputLength === this.#singleInputLengthLimit &&
      nextFieldId < this.state.cardNumber.length
    ) {
      this.inputRefs[nextFieldId].focus();
    }
  };

  prepareReturnStatement = () => {
    return {
      target: {
        id: "cardNumber",
        value: this.state.cardNumber.join(" "),
      },
    };
  };

  handleChange = (event) => {
    const state = this.state;
    const id = Number(event.target.id);
    const value = event.target.value;

    state.cardNumber[id] = value;
    this.setState({ ...state });

    const nextFieldId = id + 1;
    this.focusNextInput(value.length, nextFieldId);

    this.props.onChange(this.prepareReturnStatement());
  };

  render() {
    const { cardNumber } = this.state;
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
          {cardNumber.map((val, i) => (
            <Input
              key={i}
              forwardRef={(ref) => (this.inputRefs[i] = ref)}
              id={i}
              type="text"
              addClass="m-0"
              value={val}
              maxlength={this.#singleInputLengthLimit}
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

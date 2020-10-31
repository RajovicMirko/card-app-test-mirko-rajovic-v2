import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// COMPONENTS
import { getComponent } from "../../components/componentsMap";
import FormValidation from "../../components/global/form/validation";
import { creditCardForm } from "../../components/CreditCard/Form/edit";

// ACTIONS
import { getCardById, editCard, deleteCard } from "../../store/actions/cards";

class CardEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
      rules: {
        fullName: {
          required: { message: "Full name is required" },
          min: { value: 6, message: "Must be at least 6 characters long" },
        },
        cardNumber: {
          cardNumberFirstDigit: {
            value: props.cardNumberFirstDigitArray,
            message: `First digit must be ${props.cardNumberFirstDigitArray.join(
              ", "
            )}`,
          },
          cardNumber: { message: "Wrong card number" },
        },
        expDate: {
          exparationDate: { message: "Wrong date" },
        },
      },
      errors: {},
    };
  }

  componentDidMount() {
    const { cardId, getCardById } = this.props;
    getCardById(cardId, this.setInitState);
  }

  setInitState = (data) => {
    if (!data.id) return;

    const state = this.state;
    state.inputs = { ...data };
    this.setState({ ...state });
  };

  resetComponentAndPush = () => {
    this.setState({ inputs: {} });
    this.props.history.push("/cards");
  };

  handleChange = (event) => {
    let inputs = this.state.inputs;
    const targetId = event.target.id;
    inputs[targetId] = event.target.value;

    this.setState({ inputs });
    this.validate(targetId);
  };

  validate = (key) => {
    const form = new FormValidation(this.state);
    const { isValid, errors } = key ? form.validate(key) : form.validate();
    this.setState({ errors: errors });

    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      this.props.editCard(
        { ...this.state.inputs },
        this.resetComponentAndPush()
      );
    }
  };

  handleDelete = () => {
    this.props.deleteCard(this.state.inputs.id, this.resetComponentAndPush());
  };

  render() {
    const { inputs } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="container">
        <div className="my-cards page page-center py-5">
          <div className="col-10 col-md-6 col-xl-5 d-flex flex-column align-items-center">
            <h2 className="text-muted mb-5">Edit current card</h2>

            {getComponent({ component: "credit-card", ...inputs })}

            {getComponent({
              component: "form",
              addClass: "w-100",
              onSubmit: this.handleSubmit,
              addClassTitle: "text-center text-primary",
              children: creditCardForm(
                this.state,
                this.handleChange,
                this.handleDelete
              ),
            })}

            {getComponent({
              component: "loading-full-page",
              isLoading,
              colors: ["red", "green", "blue"],
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cardId: ownProps.match.params.id,
    cardNumberFirstDigitArray: Object.keys(state.cards.logos),
    isLoading: state.cards.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCardById: (id, fn) => dispatch(getCardById(id, fn)),
    editCard: (data, fn) => dispatch(editCard(data, fn)),
    deleteCard: (id, fn) => dispatch(deleteCard(id, fn)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CardEditPage));

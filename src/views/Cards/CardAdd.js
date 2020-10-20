import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

// COMPONENTS
import { getComponent } from '../../components/componentsMap';
import FormValidation from '../../components/global/form/validation';
import { creditCardForm } from '../../components/CreditCard/Form';

// ACTIONS
import { addCard } from '../../store/actions/cards'

class index extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputs: {
        fullName: '',
        cardNumber: '',
        expDate: '',
      },
      rules: {
        fullName: {
          required: { message: 'Full name is required' },
          min: { value: 6, message: 'Must be at least 6 characters long'}
        },
        cardNumber: {
          cardNumberFirstDigit: { value: props.cardNumberFirstDigitArray, message: `First digit must be ${props.cardNumberFirstDigitArray.join(", ")}`},
          cardNumber: { message: 'Wrong card number'}
        },
        expDate: {
          exparationDate: { message: 'Wrong date' }
        },
      },
      errors: {}
    }
  }

  validate = (key) => {
    const form = new FormValidation(this.state)
    const { isValid, errors } = key ? form.validate(key) : form.validate();
    this.setState({ errors: errors });

    return isValid;
  }

  handleChange = (event) => {
    let inputs = this.state.inputs;
    const targetId = event.target.id;

    inputs[targetId] = event.target.value;
    this.setState({ inputs });
    this.validate(targetId);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const inputs = this.state.inputs;

    if(this.validate()){
      const data = { id: uuidv4(), ...inputs }
      
      const { history, addCard } = this.props;
      const done = await addCard({ ...data });
      if(done) {
        this.setState({ inputs: {} });
        history.push('/cards');
      }
    }
  }

  
  render() {
    const { inputs } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="container">
        <div className="my-cards page page-center py-5">
        <div className="col-10 col-md-6 col-xl-5 d-flex flex-column align-items-center">
          <h2 className="text-muted mb-5">Add card to account</h2>

          { getComponent({ component: 'credit-card', ...inputs })}

          {
            getComponent({
              component: "form",
              addClass: "w-100",
              onSubmit: this.handleSubmit,
              addClassTitle: "text-center text-primary",
              children: creditCardForm(this.state, this.handleChange)
            })
          }


          { getComponent({ component: 'loading-full-page', isLoading, colors: ['red', 'green', 'blue'] }) }
        </div>
      </div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cardNumberFirstDigitArray: Object.keys(state.cards.logos),
    isLoading: state.cards.isLoading
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (data) => dispatch(addCard(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(index))
// COMPONENTS getComponent FACTORY FUNCTION
import React from 'react'

// COMPONENTS
import creditCard from './CreditCard';
import creditCardAdd from './CreditCard/Add';
import CreditCardNumberInput from './CreditCard/NumberInput'
import form from './global/form'
import input from './global/input'
import button from './global/button'
import loadingFullPage from './global/loading/full-page'
import loadingSmall from './global/loading/small'


const components = {
  'credit-card': creditCard,
  'credit-card-add': creditCardAdd,
  form,
  input,
  'input-card-number': CreditCardNumberInput,
  button,
  'loading-full-page': loadingFullPage,
  'loading-small': loadingSmall,
};

export const getComponent = (data) => {
  const { component } = data;
  if(component){
    const Tag = components[component.toLowerCase()]
    return <Tag {...data}></Tag>;
  }
}
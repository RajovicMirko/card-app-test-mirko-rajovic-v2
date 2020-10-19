// COMPONENTS getComponent FACTORY FUNCTION
import React from 'react'

// COMPONENTS
import creditCard from './CreditCard';
import creditCardAdd from './CreditCardAdd';
import form from './global/form'
import input from './global/input'
import inputCardNumber from './global/input-card-number'
import selectCardType from './global/select-card-type'
import button from './global/button'
import loadingFullPage from './global/loading/full-page'
import loadingSmall from './global/loading/small'


const components = {
  'credit-card': creditCard,
  'credit-card-add': creditCardAdd,
  form,
  input,
  'input-card-number': inputCardNumber,
  button,
  'select-card-type': selectCardType,
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
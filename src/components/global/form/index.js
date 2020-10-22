import React from 'react'

import Title from './title'
import { getComponent } from '../../componentsMap'

function Form(props) {
  const { addClass, onSubmit, title, addClassTitle, children } = props;
  
  return (
    <form
      className={`d-flex flex-column ${addClass}`}
      onSubmit={onSubmit}
    >
      { title && <Title title={title} addClass={addClassTitle} /> }
      { getComponent && children.map((field, i) => <React.Fragment key={i}>{ getComponent(field) }</React.Fragment>) }
      { !getComponent && children }
    </form>
  )
}

export default Form;

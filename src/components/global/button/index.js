import React from 'react'

export default function Button(props) {
  const {type, addClass, text, onClick} = props;

  return <button key={text} type={type} className={addClass} onClick={onClick}>{text}</button>
}

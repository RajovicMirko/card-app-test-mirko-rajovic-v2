import React from 'react';

export default function index({ colors = [] }) {
  return (
    <div className={`loader`}>
      <div className={`inner one ${ colors && colors.length <= 1 ? colors[0] : colors[0]}`}></div>
      <div className={`inner two ${ colors && colors.length <= 1 ? colors[0] : colors[1]}`}></div>
      <div className={`inner three ${ colors && colors.length <= 1 ? colors[0] : colors[2]}`}></div>
    </div>
  )
}

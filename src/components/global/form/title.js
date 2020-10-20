import React from 'react'

export default function Title({ title, addClass }) {
  return <h2 className={addClass}>{title}</h2>;
}

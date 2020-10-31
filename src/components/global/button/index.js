import React from "react";

export default function Button(props) {
  const { type, addClass, text, onClick, forwardRef } = props;

  return (
    <button
      key={text}
      ref={forwardRef}
      type={type}
      className={addClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

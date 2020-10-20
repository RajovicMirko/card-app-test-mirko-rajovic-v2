import React from 'react'

export default function index(props) {
  const {
    id,
    type,
    addClass = '',
    addClassLabel = '',
    addClassInput = '',
    label = null,
    placeholder = null,
    value = '',
    maxlength,
    error = null,
    hasError = null,
    onChange
  } = props;

  return (
    <div className={`form-group ${addClass}`}>
      { label &&
        <div className="d-flex justify-content-between align-items-end">
          <label htmlFor={id} className={addClassLabel}>{label}</label>
        </div>
      }
      <input
        key={id}
        id={id}
        type={type}
        className={`form-control form-control-sm ${(error || hasError) && 'is-invalid'} ${addClassInput} ${!!error && ''}`}
        placeholder={placeholder}
        value={value}
        maxLength={maxlength}
        onChange={onChange}
        onFocus={(e) => e.target.select()}
      />
      {error && <small className="text-danger">{ error }</small> }
    </div>
  )
}

import React from 'react'

function Field({ label, name, value, error, touched, onChange, onBlur, type = "text" }) {
 
    
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={touched && !!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {touched && error && (
        <p id={`${name}-error`} role="alert" className="field-error">
          {error}
        </p>
      )}
   
    </div>
  )
}

export default Field

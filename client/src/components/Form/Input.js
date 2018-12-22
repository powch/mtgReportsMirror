import React from 'react';

export const Input = props => (
  <div className="form-group">
    <label htmlFor={props.elementId}>{props.label}</label>
    <input
      name={props.name}
      value={props.value}
      id={props.elementId}
      className="form-control"
      onChange={props.handleInputChange}
    />
  </div>
);

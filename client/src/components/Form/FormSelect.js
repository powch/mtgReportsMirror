import React from 'react';

const FormSelect = props => (
  <div className="form-group">
    <label for={props.elementId}>{props.label}</label>
    <select
      id={props.elementId}
      className="form-control"
      onChange={props.handleInputChange}
    >
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
    </select>
  </div>
);

export default FormSelect;

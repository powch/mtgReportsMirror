import React from 'react';

const TextArea = props => (
  <div className="form-group">
    <label for={props.elementId}>{props.label}</label>
    <textarea
      className="form-control"
      id={props.elementId}
      rows="3"
      onChange={props.handleInputChange}
    />
  </div>
);

export default TextArea;

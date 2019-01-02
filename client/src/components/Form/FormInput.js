import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export const FormInput = props => (

    <FormGroup>
      <Label for={props.elementId}>{props.label}</Label>
      <Input
        name={props.name}
        value={props.value}
        id={props.elementId}
        onChange={props.handleInputChange}
        placeholder={props.placeholder}
      />
    </FormGroup>

);
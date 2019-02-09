import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export const FormInput = props => (

    <FormGroup>
      <Label for={props.elementId}>{props.label}</Label>
      <Input
        name={props.name}
        value={props.value}
        id={props.elementId}
        onChange={props.handleInputChange}
        placeholder={props.placeholder}
        type={props.type ? props.type : null}
      />
    </FormGroup>

);
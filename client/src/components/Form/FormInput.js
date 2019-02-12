import React from 'react';
import { FormGroup, FormFeedback, FormText,  Label, Input } from 'reactstrap';

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
        maxLength={props.maxLength ? props.maxLength : null}
        invalid={props.error}
      />
      <FormFeedback>{props.error}</FormFeedback>
      <FormText>{props.helpText}</FormText>
    </FormGroup>

);
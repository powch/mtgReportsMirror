import React from 'react';

const SignInBtn = props => (

  <a 
    className="btn btn-primary"
    href={props.targetPath}
  >{props.text}</a>

);

export default SignInBtn;
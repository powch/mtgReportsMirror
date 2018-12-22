import React, { Component } from 'react';
import { Input, FormBtn } from '../../components/Form'
import { Container, Col, Row } from '../../components/Grid';

class SignIn extends Component {
  state = {
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    alert('hey poke');
  };

  render() {
    return(
      <Container>
        <Row>
          <Col size='sm-3' />
          <Col size='sm-6'>
            <Input
              name='email'
              elementId='email'
              label='Email Address:'
              value={this.state.email}
              handleInputChange={this.handleInputChange}
            />
            <Input
              name='emailConfirm'
              elementId='emailConfirm'
              label='Confirm Email Address:'
              value={this.state.emailConfirm}
              handleInputChange={this.handleInputChange}
            />
            <Input
              name='password'
              elementId='password'
              label='Password:'
              value={this.state.password}
              handleInputChange={this.handleInputChange}
            />
            <Input
              name='passwordConfirm'
              elementId='passwordConfirm'
              label='Confirm Password:'
              value={this.state.passwordConfirm}
              handleInputChange={this.handleInputChange}
            />
            <FormBtn>Sign Up</FormBtn>
          </Col>
          <Col size='sm-3' />
        </Row>
      </Container>
    );
  }
};

export default SignIn;

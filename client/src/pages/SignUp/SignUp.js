import React, { Component } from 'react';
import { FormInput } from '../../components/Form';
import { Form, Container, Row, Col, Button } from 'reactstrap';

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
          <Col sm='3' />
          <Col sm='6'>
            <Form>
              <FormInput
                name='email'
                elementId='email'
                label='Email Address:'
                placeholder='example@mail.com'
                value={this.state.email}
                handleInputChange={this.handleInputChange}
              />
              <FormInput
                name='emailConfirm'
                elementId='emailConfirm'
                label='Confirm Email Address:'
                placeholder='Confirm your email address'
                value={this.state.emailConfirm}
                handleInputChange={this.handleInputChange}
              />
              <FormInput
                name='password'
                elementId='password'
                label='Password:'
                placeholder='Password'
                value={this.state.password}
                handleInputChange={this.handleInputChange}
              />
              <FormInput
                name='passwordConfirm'
                elementId='passwordConfirm'
                label='Confirm Password:'
                placeholder='Confirm your password'
                value={this.state.passwordConfirm}
                handleInputChange={this.handleInputChange}
              />
              <Button color='success'>Sign In</Button>
            </Form>
          </Col>
          <Col sm='3'/>
        </Row>
      </Container>
    );
  }
};

export default SignIn;

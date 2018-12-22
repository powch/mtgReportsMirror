import React, { Component } from 'react';
import { Input, FormBtn } from '../../components/Form'
import { Container, Col, Row } from '../../components/Grid';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
    return (
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
              name='password'
              elementId='password'
              label='Password:'
              value={this.state.password}
              handleInputChange={this.handleInputChange}
            />
            <FormBtn>Sign In</FormBtn>
          </Col>
          <Col size='sm-3' />
        </Row>
      </Container>
    );
  }
};

export default SignIn;

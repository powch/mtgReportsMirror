import React, { Component } from 'react';
import { FormInput } from '../../components/Form';
import { Container, Row, Col, Form, Button } from 'reactstrap';

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
          <Col sm="3" />
          <Col sm="6">
            <Form>
              <FormInput
                name="email"
                elementId="email"
                label="Email Address:"
                value={this.state.email}
                placeholder='example@mail.com'
                handleInputChange={this.handleInputChange}
              />
              <FormInput
                name="password"
                elementId="password"
                label="Password:"
                placeholder='Password'
                value={this.state.password}
                handleInputChange={this.handleInputChange}
              />
              <Button color='success'>Sign In</Button>
            </Form>
          </Col>
          <Col sm="3" />
        </Row>
        <Row className="mt-5">
          <Col sm="4" />
          <Col sm="4">
            Don't have an account? <a href='/signup'>Register here.</a>
          </Col>
          <Col sm="4" />
        </Row>
      </Container>
    );
  }
}

export default SignIn;

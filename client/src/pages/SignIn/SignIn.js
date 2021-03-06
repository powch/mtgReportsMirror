import React, { Component } from 'react';
import { FormInput } from '../../components/Form';
import { Container, Row, Col, Form, Button } from 'reactstrap';
import { withFirebase } from '../../components/Firebase';

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

    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {

    const {
      email,
      password
    } = this.state;

    const isInvalid = 
      password.length < 6 ||
      email === '';

    return (
      <Container>
        <Row>
          <Col sm="3" />
          <Col sm="6">
            <Form onSubmit={this.handleFormSubmit}>
              <FormInput
                name="email"
                elementId="email"
                label="Email Address:"
                value={this.state.email}
                placeholder="example@mail.com"
                handleInputChange={this.handleInputChange}
              />
              <FormInput
                name="password"
                elementId="password"
                label="Password:"
                placeholder="Password"
                value={this.state.password}
                handleInputChange={this.handleInputChange}
              />
              <Button disabled={isInvalid} type="submit" color="success">
                Sign In
              </Button>
            </Form>
          </Col>
          <Col sm="3" />
        </Row>
        <Row className="mt-5">
          <Col sm="4" />
          <Col sm="4" className="text-center">
            Don't have an account? <a href="/signup">Register here.</a>
          </Col>
          <Col sm="4" />
        </Row>
        <Row className="mt-1">
          <Col sm="4" />
          <Col sm="4" className="text-center">
            <a href="/signup">Forgot your password?</a>
          </Col>
          <Col sm="4" />
        </Row>
      </Container>
    );
  }
}

export default withFirebase(SignIn);

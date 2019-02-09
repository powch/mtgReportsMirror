import React, { Component } from 'react';
import { FormInput } from '../../components/Form';
import { Form, Container, Row, Col, Button } from 'reactstrap';
import { withFirebase } from '../../components/Firebase';

const INITIAL_STATE = {
  userName: '',
  email: '',
  emailConfirm: '',
  password: '',
  passwordConfirm: '',
  error: null
}

class SignUp extends Component {
  state = { ...INITIAL_STATE };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { userName, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {

    const {
      userName,
      email,
      emailConfirm,
      password,
      passwordConfirm,
      error
    } = this.state;

    const isInvalid =
      password !== passwordConfirm ||
      password === '' ||
      email !== emailConfirm ||
      email === '' ||
      userName === '';

    return (
      <Container>
        <Row>
          <Col sm='3' />
          <Col sm='6'>
            <Form onSubmit={this.handleFormSubmit}>
              <FormInput
                name='userName'
                elementId='userName'
                label='Username:'
                placeholder='Choose a username'
                value={this.state.userName}
                handleInputChange={this.handleInputChange}
              />
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
                type='password'
                value={this.state.password}
                handleInputChange={this.handleInputChange}
              />
              <FormInput
                name='passwordConfirm'
                elementId='passwordConfirm'
                label='Confirm Password:'
                placeholder='Confirm your password'
                type='password'
                value={this.state.passwordConfirm}
                handleInputChange={this.handleInputChange}
              />
              <Button disabled={isInvalid} type='submit' color='success'>
                Sign In
              </Button>

              {error && <p>{error.message}</p>}
            </Form>
          </Col>
          <Col sm='3' />
        </Row>
      </Container>
    );
  }
};

export default withFirebase(SignUp);

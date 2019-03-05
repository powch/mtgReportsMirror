import React, { Component } from 'react';
import { FormInput } from '../../components/Form';
import { Form, Container, Row, Col, Button } from 'reactstrap';
import { withFirebase } from '../../components/Firebase';

class SignUp extends Component {
  state = {
    userName: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: '',
    error: null,
    errorType: null 
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const { userName, email, password } = this.state;

    this.props.getUsername( userName );

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.props.firebase
          .doProfileUpdate( userName )
          .then(user => this.props.history.push('/'));
      })
      .catch(error => {

        if (error.code === 'auth/email-already-in-use') {
          this.setState({
            error: 'This email address is already in use.',
            errorType: 'email'
          });
        } else if (error.code === 'auth/invalid-email') {
          this.setState({
            error: 'Please enter a valid email address.',
            errorType: 'email'
          });
        }
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
      password.length < 6 ||
      passwordConfirm.length < 6 ||
      email !== emailConfirm ||
      email === '' ||
      userName.length < 3;

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
                maxLength={25}
                handleInputChange={this.handleInputChange}
                helpText='Must be 3 - 25 characters. No special characters.'
              />
              <FormInput
                name='email'
                elementId='email'
                label='Email Address:'
                placeholder='example@mail.com'
                value={this.state.email}
                handleInputChange={this.handleInputChange}
                helpText='Enter valid email address.'
                error={error ? error : null}
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
                helpText='Minimum of 6 characters.'
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

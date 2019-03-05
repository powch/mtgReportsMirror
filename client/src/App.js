import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import API from './utils/API';
import { withFirebase } from './components/Firebase';
import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SubmitReport from './pages/SubmitReport';
import HomePage from './pages/Home';

class App extends Component {

  state = {
    uid: null,
    userName: null
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      return ((authUser)
        ? (this.setState({
            uid: authUser.uid,
            userName: authUser.displayName
          }))
        : (this.setState({ uid: null }))
        //Clears states when user is logged out.

      )
    })
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          
          <Nav 
            userName={this.state.userName}
            doSignOut={this.props.firebase.doSignOut}
          />

          <Route exact path={'/'} render={props =>
            (<HomePage {...props} />)}
          />
          <Route exact path={'/signup'} render={props => 
            (<SignUp {...props} />)} 
          />
          <Route exact path={'/signin'} render={props =>
            (<SignIn {...props} />)} 
          />
          <Route exact path={'/submitreport'} render={props =>
            (<SubmitReport uid={this.state.uid} />)}
          />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);

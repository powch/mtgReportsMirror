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
    authUser: null,
    uid: null,
    userName: null
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      return ((authUser)
        ? (this.setState({
            authUser, 
            uid: authUser.uid,
            userName: authUser.displayName
          }),
          API.findOrCreateUser({ 
            uid: authUser.uid,  
            username: authUser.displayName
          })
            .catch(err => console.log(err)))
          //Checks if user is in MYSQL DB.  Adds them if not.

        : (this.setState({ authUser: null, uid: null, userName: null }))
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
            authUser={this.state.authUser}
            doSignOut={this.props.firebase.doSignOut}
          />

          <Route exact path={'/'} render={props =>
            (<HomePage authUser={this.state.authUser} />)}
          />
          <Route exact path={'/signup'} render={props => 
            (<SignUp authUser={this.state.authUser} {...props} />)} 
          />
          <Route exact path={'/signin'} render={props =>
            (<SignIn authUser={this.state.authUser} {...props} />)} 
          />
          <Route exact path={'/submitreport'} render={props =>
            (<SubmitReport authUser={this.state.authUser} />)}
          />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);

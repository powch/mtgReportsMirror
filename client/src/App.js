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

class App extends Component {

  state = {
    authUser: null,
    role: null,
    uid: null
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      return ((authUser)
        ? (this.setState({ authUser }),
          this.setState({ uid: authUser.uid }),
          //adds uid to state
          API.findOrCreateUser({ uid: authUser.uid, fbId: authUser.fbId })
            .catch(err => console.log(err)),
          //Checks if user is in MYSQL DB.  Adds them if not.
          API.getUserRole({ uid: authUser.uid })
            .then(result => this.setState({ role: result.data.role }))
            .catch(err => console.log(err)))
        //Gets user role from db.

        : (this.setState({ authUser: null, uid: null, role: null }))
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
          
          <Nav />

          <Route exact path={'/signup'} render={props => 
            (<SignUp authUser={this.state.authUser} />)} 
          />
          <Route exact path={'/signin'} render={props =>
            (<SignIn authUser={this.state.authUser} />)} 
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

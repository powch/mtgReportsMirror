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
    userName: null,
    userReports: null
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      
      if ( authUser ) {
        this.setState({
          uid: authUser.uid,
        });
        API.findOrCreateUser({
          uid: authUser.uid,
          userName: this.state.userName
        })
        .then(res => {
          API.getUserReports({ uid: authUser.uid })
          .then(res => this.setState({ userReports: res.data.Reports }))
          .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
  
        
      } else {
        this.setState({ uid: null, userName: null, userReports: null });
      }
    })
  }

  componentWillUnmount() {
    this.listener();
  }

  getUsername = userName => {
    this.setState({ userName });
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
            (<SignUp getUsername={this.getUsername} {...props} />)} 
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

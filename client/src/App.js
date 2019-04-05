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
    fbId: null,
    displayName: null,
    isNewUser: false,
    dbReports: []
  }

  componentDidMount() {
    
    this.refreshHomeReports();

    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      
      if ( authUser ) {
        this.setState({
          fbId: authUser.uid,
        });
        if ( this.state.isNewUser ) {
          API.createUser({
            fbId: authUser.uid,
            displayName: this.state.displayName
          })
          .catch(err => console.log(err));
        } else {
          API.getUserInfo( authUser.uid )
            .then(info => {
              console.log(info.data.displayName)
              this.setState({ displayName: info.data.displayName })
            })
            .catch(err => console.log(err))
        }
  
        
      } else {
        this.setState({ fbId: null, displayName: null, isNewUser: false });
      }
    })
  }

  componentWillUnmount() {
    this.listener();
  }

  getUsername = displayName => {
    this.setState({ displayName, isNewUser: true });
  }

  refreshHomeReports = () => {
    API.getAllReports()
      .then(reports => {
        this.setState({ dbReports: reports.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div>
          
          <Nav 
            displayName={this.state.displayName}
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
            (<SubmitReport 
              fbId={this.state.fbId} 
              displayName={this.state.displayName} 
              refreshHomeReports={this.refreshHomeReports}
              {...props} 
            />)}
          />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);

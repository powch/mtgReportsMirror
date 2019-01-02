import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Nav from './components/Nav';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Nav />

          <Route exact path={'/signup'} component={SignUp} />
          <Route exact path={'/signin'} component={SignIn} />
          

        </div>
      </Router>
    );
  }
}

export default App;

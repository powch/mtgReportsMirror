import React from 'react';
const FirebaseContext = React.createContext(null);

//This is a helper that wraps a component in the Firebase context so that it can use the firebase methods.

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)

export default FirebaseContext;
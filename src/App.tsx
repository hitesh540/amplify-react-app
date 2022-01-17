import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
import {AmplifySignOut} from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h1>My App Content</h1>
      </header>
    </div>

    //  <Authenticator>
    //   {({ signOut }) => (
    //     <div className="App">
    //       <h1>Hey welcome to my channel, with auth!</h1>
    //       <button onClick={signOut}>Sign out</button>
    //     </div>
    //   )}
    // </Authenticator>

  );
}

export default withAuthenticator(App);

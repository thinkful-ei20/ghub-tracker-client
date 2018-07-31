import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import './login-page.css';

export function LoginPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard

  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <main>
      <div className="login">
        <h2>Log in</h2>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <LoginForm />
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
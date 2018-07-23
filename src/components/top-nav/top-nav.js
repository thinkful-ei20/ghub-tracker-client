import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";

import './top-nav.css'

class TopNav extends React.Component {

  signOut = () => {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  };

  renderLoggedIn() {
    return (
      <React.Fragment>
        <li><Link to={`/dashboard`} aria-label="Click to see the leaderboard">Leaderboard</Link></li>
        <li><Link to={`/`} aria-label="Click to sign out" onClick={this.signOut}>Sign Out</Link></li>
      </React.Fragment>
    );
  }

  renderLoggedOut() {
    return (
      <React.Fragment>
        <li><Link className="loginLink button" to={`/login`} aria-label="Click to log in">Log in</Link></li>
        <li><Link className="signupLink button" to={`/register`} aria-label="Click to sign up">Sign Up</Link></li>
      </React.Fragment>
    );
  }

  render() {
    // When user is logged in render log out button and link to dashboard
    // Otherwise, render links to log in, register, and view demo components
    return (
      <React.Fragment>
        <nav>
          <ul>
            <li><Link className="logo" to="/">Commit2Win</Link></li>
            {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(TopNav);

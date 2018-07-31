import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { Link } from 'react-router-dom';
import './header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let links;
    if (this.props.loggedIn) {
      links = (
        <Link onClick={() => this.logOut()}>Log out</Link>
      );
    }
    else {
      links = (
        <React.Fragment>
          <Link to="/login" className="login-button">Log in</Link>
          <Link to="/register" className="signup-button">Sign up</Link>
        </React.Fragment>
      );
    }
    return (
      <header>
        <a href="#default" class="logo">Commit2Win</a>
        <div class="header-right">
          {links}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
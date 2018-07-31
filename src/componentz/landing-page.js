import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Background from './landing-page.png';
import './landing-page.css';
import LoginForm from './login-form';

const landingStyle = {
  backgroundImage: `url(${Background})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: '50% 50%',
};

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  // return (
  //   <section className="landing">
  //     <h2>Welcome to Foo App</h2>
  //     <LoginForm />
  //     <Link to="/register">Register</Link>
  //   </section>
  // );

  return (
    <section className="landing">
      <div class="hero-image" style={landingStyle}>
        <div class="hero-text">
          <h1>I am John Doe</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
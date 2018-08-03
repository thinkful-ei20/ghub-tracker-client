import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Background from './landing-page.png';
import './landing-page.css';

const landingStyle = {
  backgroundImage: `url(${Background})`,
};

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <main>
      <section className="landing">
        <div className="hero-image" style={landingStyle}>
          <div className="hero-text">
            <h1>Afraid of commitments?</h1>
            <p>Don't be anymore with this tracking and challenges tool.</p>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
        <div className="description">
          <h2>What is this?</h2>
          <p>Commit2Win is a web app created with the goal of using competition to encourage better version control usage.
            <br />By tracking Github contributions, it allows users to compete with each other on a day-to-day basis.
            <br />Users are further encouraged to compete with a challenge system that allows a user to directly compare their contributions with another.</p>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
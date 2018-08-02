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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar egestas lorem tincidunt tempor. Morbi pulvinar convallis fermentum. Integer ac neque a tortor consequat luctus. Sed vitae ex eros. Nulla molestie tortor quis lectus pulvinar, quis finibus est elementum. Cras at laoreet odio. Fusce in commodo ipsum. Integer ac libero suscipit, fringilla velit eu, dictum magna. In dignissim consectetur vehicula. Fusce tempor felis mauris, eu vestibulum nisl ultricies vel. Aenean quis nunc at elit dapibus tempus. Etiam sed purus quis eros tempor placerat id sed justo.</p>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
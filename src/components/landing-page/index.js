import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Background from './background_image.png';

import './landing-page.css';

var landingStyle = {
    backgroundImage: `url(${Background})`,
};

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <React.Fragment>
            <main>
                <section className="landing-banner text-center" style={landingStyle}>
                    <h3>Something Catchy</h3>
                    <Link to={`/register`} aria-label="Click to sign up">Sign Up</Link>
                </section>
                <section className="landing-description text-center">
                    <p>Description Here</p>
                </section>
                <section className="landing-footer text-center">
                    <p>Footer</p>
                </section>
            </main>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

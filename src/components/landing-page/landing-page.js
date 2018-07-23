import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import landingImg from'../../landing.jpg';

// import LoginForm from './login-form';
import './landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <React.Fragment>
            <main>
              <div className="landingImgContainer">
                <img src={landingImg} alt="landingImg"/>
              </div>
              <div className="description">Description of the App</div>
            </main>
        </React.Fragment>
        // <div className="home">
        //     <h2>Welcome to Foo App</h2>
        //     <LoginForm />
        //     <Link to="/register">Register</Link>
        // </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
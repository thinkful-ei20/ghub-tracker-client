import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function Leaderboard(props) {

    if (!props.loggedIn) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Leaderboard);
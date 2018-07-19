import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function Challenges(props) {

    if (!props.loggedIn) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="challenges">
            <h2>Challenges</h2>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Challenges);
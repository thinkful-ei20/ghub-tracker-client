import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import UserData from './user-data';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }
  
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">
          Name: {this.props.name}
        </div>
        <UserData />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;

  return {
    username: currentUser.username,
    name: `${currentUser.firstname} ${currentUser.lastname}`,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

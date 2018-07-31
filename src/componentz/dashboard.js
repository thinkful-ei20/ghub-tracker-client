import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';
import { fetchUserProfile } from '../actions/profile';

export class Dashboard extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
    this.props.loadProfile();
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.profile.username}
        </div>
        <div className="dashboard-name">Name: {this.props.profile.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.profile.username}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.data,
  loading: state.profile.loading,
  error: state.profile.error
});

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(fetchUserProfile())
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
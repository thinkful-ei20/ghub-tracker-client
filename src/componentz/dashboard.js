import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchUserProfile } from '../actions/profile';
import './dashboard.css';
import ProfileCard from './profile-card';
import FriendsList from './friends-list';
import ChallengesList from './challenges-list';
import ReposChart from './repos-chart';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  render() {
    return (
      <div className="row">
        <div className="side">
          <div className="side-wrapper">
            <ProfileCard profile={this.props.profile} />
            <FriendsList friends={this.props.profile} />
          </div>
        </div>
        <div className="main">
          <div className="main-wrapper">
            <ChallengesList challenges={this.props.profile} />
            <ReposChart repos={this.props.profile} />
          </div>
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
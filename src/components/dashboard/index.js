import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchUserProfile } from '../../actions/profile';

import ProfileCard from '../profile/card';
import FriendsList from '../friends/list';

import { PieChart } from 'react-easy-chart';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  render() {
    return (
      <div class="row">
        <div class="column left">
          <div className="user-profile">
            <ProfileCard profile={this.props.profile} />
            <FriendsList friends={this.props.profile.friends} />
          </div>
        </div>
        <div class="column right">
          <h2>REPO SUMMARY</h2>
          {this.props.profile.repos ? (
            <PieChart
              data={[
                { key: 'A', value: 100 },
                { key: 'B', value: 200 },
                { key: 'C', value: 50 }
              ]}
            />
          ) : (
              <p>Loading...</p>
            )}
        </div>
      </div>
    )
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

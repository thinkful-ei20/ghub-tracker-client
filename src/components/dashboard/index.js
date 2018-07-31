import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchUserProfile } from '../../actions/profile';
import { getFriends } from '../../actions/users';

import ProfileCard from '../profile/card';
import FriendsList from '../friends/list';
import AddFriendForm from '../add-friend-form/';

import { PieChart } from 'react-easy-chart';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentWillMount() {
    this.props.loadProfile();
    this.props.loadFriends();
  }

  render() {
    return (
      <div class="row">
        <div class="column left">
          <div className="user-profile">
            <ProfileCard profile={this.props.profile} />
            <FriendsList friends={this.props.friends} />
          </div>
        </div>
        <div class="column right">
          <h2>REPO SUMMARY</h2>
          <p>Total commits per repo</p>
          {this.props.profile.repos ? (
            <PieChart
              size={600}
              innerHoleSize={300}
              padding={50}
              labels
              data={this.props.profile.repos.map((repo, index) => {
                return {
                  key: `${repo.name} (${repo.commits.length})`,
                  value: repo.commits.length
                };
              })}
            />
          ) : (
              <p>Loading...</p>
            )}

            <AddFriendForm />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile.data,
  loading: state.profile.loading,
  error: state.profile.error,
  friends:  state.friends.data
});

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(fetchUserProfile()),
  loadFriends: () => dispatch(getFriends())
});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));

import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../requires-login';
import { fetchUserProfile } from '../../actions/profile';

import ProfileCard from '../profile/card';
import FriendCard from '../friends-list/card';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  render() {
    return (
      <div>
        <ProfileCard profile={this.props.profile} />
        {/* <FriendCard profile={this.props.profile.friends} /> */}
        <FriendCard  />
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

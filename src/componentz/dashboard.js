import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchUserProfile } from '../actions/profile';
import { sendChallenge, acceptChallenge } from '../actions/challenges';
import './dashboard.css';
import ProfileCard from './profile-card';
import FriendsList from './friends-list';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ChallengesList from './challenges-list';
import ReposChart from './repos-chart';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.loadProfile();
  }

  challengeFriend = (friend) => {
    this.props.dispatch(sendChallenge(friend.id));
  }

  acceptFriendChallenge = (challenge) => {
    console.log('acceptFriendChallenge');
    console.log(challenge)
    // this.props.dispatch(acceptChallenge())
  }

  render() {
    return (
      <div className="row">
        <div className="side">
          <ProfileCard profile={this.props.profile} />
          <FriendsList friends={this.props.profile} sendChallenge={this.challengeFriend} />
        </div>
        <div className="main">
          <Tabs>
            <TabList>
              <Tab>Challenges</Tab>
              <Tab>Repositories</Tab>
              <Tab>Commits</Tab>
            </TabList>
            <TabPanel>
              <ChallengesList challenges={this.props.profile} acceptChallenge={this.acceptFriendChallenge} />
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
              <ReposChart repos={this.props.profile} />
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
              <ReposChart repos={this.props.profile} />
            </TabPanel>
          </Tabs>
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
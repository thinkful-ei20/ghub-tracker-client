import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchUserProfile } from '../actions/profile';
import { sendChallenge, acceptChallenge, cancelChallenge } from '../actions/challenges';
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

  componentWillReceiveProps(nextProps) {
    if (this.props.chaloading && !nextProps.chaloading) {
      this.props.loadProfile();
    }
  }

  handleSendFriendChallenge = ({ id }) => {
    this.props.sendChallengeConnect(id);
  }

  handleAcceptFriendChallenge = ({ sender }) => {
    this.props.acceptChallengeConnect(sender);
  }

  handleCancelFriendChallenge = (challenge) => {
    console.log(challenge);
    this.props.cancelChallengeConnect(challenge.receiver);
  }  

  render() {
    return (
      <div className="row">
        <div className="side">
          <ProfileCard profile={this.props.profile} />
          <FriendsList friends={this.props.profile} onSendFriendChallenge={this.handleSendFriendChallenge} />
        </div>
        <div className="main">
          <Tabs>
            <TabList>
              <Tab>Challenges</Tab>
              <Tab>Repositories</Tab>
              <Tab>Commits</Tab>
            </TabList>
            <TabPanel>
              <ChallengesList challenges={this.props.profile} onAcceptFriendChallenge={this.handleAcceptFriendChallenge} onCancelFriendChallenge={this.handleCancelFriendChallenge} />
            </TabPanel>
            <TabPanel>
              <ReposChart repos={this.props.profile} />
            </TabPanel>
            <TabPanel>
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
  error: state.profile.error,
  chaloading: state.challenges.loading,
  chaerror: state.challenges.error
});

const mapDispatchToProps = dispatch => ({
  loadProfile: () => dispatch(fetchUserProfile()),
  
  sendChallengeConnect: (recieverId) => dispatch(sendChallenge(recieverId)),
  acceptChallengeConnect: (senderId) => dispatch(acceptChallenge(senderId)),
  cancelChallengeConnect: (recId) => dispatch(cancelChallenge(recId)),

});

export default requiresLogin()(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
import React from 'react';
import Avatar from './friends-list.png'
import './friends-request-page.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPublicProfile, getFriends, acceptRequest } from '../actions/users';
import './friends-list.css';


export class FriendsRequestPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(getFriends());
  }

  onEventClick(username) {
    return this.props.dispatch(getPublicProfile(username))
      .then(data => {
        let friendId = data.id;
        return this.props.dispatch(acceptRequest(friendId));
      })
  }

  render() {

    if (!localStorage.authToken) {
      return <Redirect to="/login" />;
    }
    
    

    if (!this.props.friends) {
      return null;
    }


    const chips = this.props.friends.map((friend, index) => {
      if(friend.status === 'pending') {
        return (
          <div className="chip" key={index}>
          <img src={Avatar} alt="Person" width="96" height="96" />
          <span>{friend.friend.username}</span>
          <button className="acceptButton" onClick={ () => { this.onEventClick(friend.friend.username)} }>Accept</button>
        </div>
        );
      }
  
      });

    return (
      <section className="friends">
      <h3>Friend Requests</h3>
      {chips}
    </section>
    );
  }

}


const mapStateToProps = state => ({
  friends: state.friends.friends
});

export default connect(mapStateToProps)(FriendsRequestPage);
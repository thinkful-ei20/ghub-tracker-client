import React from 'react';
import Avatar from './friends-list.png'
import './friends-list.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFriends } from '../actions/users';


export class FriendList extends React.Component {

  componentDidMount() {
    this.props.dispatch(getFriends());
  }

  render() {

    if (!this.props.friends) {
      return null;
    }


    const chips = this.props.friends.map((friend, index) => {
      if(friend.status === 'accepted') {
        return (
          <div className="chip" key={index}>
          <img src={Avatar} alt="Person" width="96" height="96" />
          <span>{friend.friend.username}</span>
          {/* <button value={friend} onClick={() => props.onSendFriendChallenge(friend.friend)}>Challenge</button> */}
        </div>
        );
      }
  
      });
  
    return (
      <section className="friends">
        <h3>Friends</h3>
        {chips}
        <Link className="addFriendLink" to="/friends">Add a Friend</Link>
        <Link className="friendRequests" to="/requests">Friend Requests</Link>
      </section>
    );
  }
}


const mapStateToProps = state => ({
  friends: state.friends.friends
});

export default connect(mapStateToProps)(FriendList);


import React from 'react';
import Avatar from './friends-list.png'
import './friends-list.css';

export default (props) => {
  if (!props.friends) {
    return null;
  }

  const chips = props.friends.friends.map((friend, index) => {
    if(friend.status === 'accepted') {
      return (
        <div className="chip" key={index}>
        <img src={Avatar} alt="Person" width="96" height="96" />
        <span>{friend.friend.username}</span>
        <button value={friend} onClick={() => props.onSendFriendChallenge(friend.friend)}>Challenge</button>
      </div>
      );
    }

    }
  );

  return (
    <section className="friends">
      <h3>Friends</h3>
      {chips}
    </section>
  );
}
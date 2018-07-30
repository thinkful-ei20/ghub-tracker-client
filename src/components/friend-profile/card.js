import React from 'react';
import './friend-profile.css';

export default function FriendProfile(props) {
  return (
    <div className="friendProfile">
      <h3 className="friendProfileTitle">{props.location.state.friend.username}</h3>
    </div>
  );
};
import React from 'react';
import './friend-profile.css';

export default function FriendProfile(props) {
  // console.log(props)
  if(props) {
    console.log('PROPS EXIST')
  }
  return (
    <div className="friendProfile">
      <h3 className="friendProfileTitle">Public Profile</h3>
      {/* <h3>{props.friend.username}</h3> */}
    </div>
  );
};
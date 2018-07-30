import React from 'react';

export default function FriendProfile(props) {
  // console.log(props)
  if(props) {
    console.log('PROPS EXIST')
  }
  return (
    <div className="friend-profile">
      {/* <h3>{props.friend.username}</h3> */}
    </div>
  );
};
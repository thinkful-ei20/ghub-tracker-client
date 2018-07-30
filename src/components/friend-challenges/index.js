import React from 'react';
import './friend-challenges.css';

export default function FriendChallenges(props) {
  // console.log(props)
  if(props) {
    console.log('PROPS EXIST')
  }
  return (
    <div className="friendChallenges">
      <h3 className="friendChallengesTitle">Challenges</h3>
      {/* <h3>{props.friend.username}</h3> */}
    </div>
  );
};
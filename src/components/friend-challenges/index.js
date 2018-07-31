import React from 'react';
import './friend-challenges.css';

export default function FriendChallenges(props) {

  let challengesList; 
  if(props) {
    console.log(props.location.state.challenges);
    challengesList = props.location.state.challenges.map((challenge, index) => {
      return (
        <li key={index} className="challenge">{challenge}</li>
      )
    })
  }
  return (
    <div className="friendChallenges">
      <h3 className="friendChallengesTitle">Challenges</h3>
      <ul>
        {challengesList}
      </ul>
    </div>
  );
};
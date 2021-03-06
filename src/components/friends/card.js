import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card(props) {
  console.log('friend card', props.friend.challenges)
  return (
    <div className="friendCard">
      <span className="friendName">{props.friend.username}</span>
      <Link className="friendLink" to={{
        pathname: "/friends",
        state: {
          friend: props.friend
        } 
      }}>Profile</Link>
      <Link className="challengeLink" to={{
        pathname: "/friend-challenges",
        state: {
          challenges: props.friend.challenges
        }
      }}>Challenge</Link>
    </div>
  );
};
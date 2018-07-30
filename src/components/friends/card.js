import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card(props) {
  // console.log(props.friend)
  return (
    <div className="friendCard">
      <span className="friendName">{props.friend.username}</span>
      <Link className="friendLink" friend={props.friend} to="/friends">Profile</Link>
      <Link className="challengeLink" to="friend-challenges">Challenge</Link>
    </div>
  );
};
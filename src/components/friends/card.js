import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  console.log(props.friend)
  return (
    <div className="friend-card">
      <span className="friend-name">{props.friend.username}</span>
      <Link friend={props.friend} to="/friends">Profile</Link>
      <Link to="#">Challenge</Link>
    </div>
  );
};
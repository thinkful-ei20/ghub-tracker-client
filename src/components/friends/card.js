import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="friend-card">
      <span className="friend-name">{props.friend.username}</span>
      <Link to="#">Profile</Link>
      <Link to="#">Challenge</Link>
    </div>
  );
};
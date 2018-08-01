import React from 'react';
import Avatar from './friends-list.png'
import './friends-list.css';

export default ({ friends }) => {
  if (!friends) {
    return null;
  }

  const chips = friends.friends.map((friend, index) =>
    <div className="chip" key={index}>
      <img src={Avatar} alt="Person" width="96" height="96" />
      <span>{friend.friend.username}</span>
      <a href="#">Challenge</a>
    </div>
  );

  return (
    <section className="friends">
      <h3>FFriends</h3>
      {chips}
    </section>
  );
}
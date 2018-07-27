import React from 'react';
import FriendCard from './card';

export default function List(props) {
  if (props.friends) {
    const friends = props.friends.map((friend, index) =>
      <li className="friends-list-wrapper" key={index}>
        <FriendCard {...friend} />
      </li>
    );

    return (
      <div className="friends text-center">
        <h2>Friends</h2>
        <ul className="friends-list">{friends}</ul>
      </div>
    );
  }
  else {
    return (
      <div className='friends text-center'>
        <p>Loading...</p>
      </div>
    )
  }
}

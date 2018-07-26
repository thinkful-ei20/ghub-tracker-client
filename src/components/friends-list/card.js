import React from 'react';

import './card.css';

export default (props) => {
  console.log(props.profile)
  if (props.profile) {



      let friendList = props.profile.map(function(currFriend, index) {
      
        return (
          <li className="friend"> Name: {currFriend.friend.username} </li>
        );
      });
  

    return (
      <div className='friend-card'>
        <h3 className="friendTitle">Friends</h3>
        <ul>
          {friendList}
        </ul>
      </div>
    )
  }
  else {
    return (
      <div className='friend-card'>
        <p>Loading...</p>
      </div>
    )
  }
}

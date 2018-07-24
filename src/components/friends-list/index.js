import React from 'react';

export const FriendsList = ({friends}) => {
  let friendsList;
  if(friends) {
    friendsList = friends.map(friend => {
      return (
        <li>{friend}</li>
      )
    })
  }

  return (
    <div>
      <h3>Friends</h3>
      <ul>
        {friendsList}
      </ul>
    </div>
  )
} 

export default FriendsList;
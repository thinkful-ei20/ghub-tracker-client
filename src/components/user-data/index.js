import React from 'react';
import Details from '../details/';
import FriendList from '../friends-list/';

export const UserData = () => {
  return (
    <div className="userData">
      <h2>User Data</h2>
      <Details />
      <FriendList />
    </div>
  )
}

export default UserData;
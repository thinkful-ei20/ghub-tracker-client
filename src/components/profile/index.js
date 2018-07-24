import React from 'react';

export const Profile = ({commits}) => {
  let profileList, userName;
  if(commits) { 
    userName = 'UserName';
    profileList = Object.keys(commits).map(function(key, index) {
      return <li key={index}>{key}: {commits[key]}</li>;
   });
    
  } else {
    userName = '';
  }

  return (
    <div>
      <h3>Profile Data</h3>
      <ul>
        <li>{userName}</li>
        {profileList}
      </ul>
    </div>
  )
} 

export default Profile;
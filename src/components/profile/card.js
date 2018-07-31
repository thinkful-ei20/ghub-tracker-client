import React from 'react';

import './card.css';

export default (props) => {
  if (props.profile) {
    // console.log('PROFILE',props)
    return (
      <div className='profile-card'>
        <img src={props.profile.avatar_url} alt={props.profile.username} />
        <h1>{props.profile.username}</h1>

        <p className="title">{props.profile.type}</p>
        <a href={props.profile.html_url}>GitHub</a>
        <p className="publicRepos">Public Repos: {props.profile.public_repos}</p>
        {/* <p><button>Contact</button></p> */}
      </div>
    )
  }
  else {
    return (
      <div className='profile-card'>
        <p>Loading...</p>
      </div>
    )
  }
}

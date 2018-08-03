import React from 'react';
import './profile-card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <section className="profile">
      <div className="card">
        <img src={profile.avatar_url} alt={profile.username} />
        <p className="fullname">{profile.name}</p>
        <p className="username"><FontAwesomeIcon icon="user" /> {profile.username}</p>
        <div className="bio">
          <p className="alignleft">Email</p>
          {/* <p className="alignright">{profile.email}</p> */}
          <a className="alignright" href={profile.email}>{profile.email}</a>
          <div style={{ clear: "both" }} />
          <p className="alignleft">Website</p>
          {/* <p className="alignright">{profile.blog}</p> */}
          <a className="alignright" href={profile.blog}>{profile.blog}</a>
          <div style={{ clear: "both" }} />
          <p className="alignleft">Location</p>
          <p className="alignright">{profile.location}</p>
          <div style={{ clear: "both" }} />
          <p className="alignleft">GitHub</p>
          {/* <p className="alignright">{profile.html_url}</p> */}
          <a className="alignright" href={profile.html_url}>{profile.html_url}</a>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import './profile-card.css';

export default ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <section className="profile">
      <div className="card">
        <img src={profile.avatar_url} alt={profile.username} />
        <p className="fullname">{profile.name}</p>
        <p className="username">{profile.username}</p>
        <div className="bio">
          <p className="alignleft">Email</p>
          <p className="alignright">{profile.email}</p>
          <div style={{ clear: "both" }} />
          <p className="alignleft">Website</p>
          <p className="alignright">{profile.blog}</p>
          <div style={{ clear: "both" }} />
          <p className="alignleft">Location</p>
          <p className="alignright">{profile.location}</p>
          <div style={{ clear: "both" }} />
          <p className="alignleft">GitHub</p>
          <p className="alignright">{profile.html_url}</p>
          <div style={{ clear: "both" }} />
        </div>
      </div>
    </section>
  );
}
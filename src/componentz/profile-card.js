import React from 'react';
import './profile-card.css';

export default ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <section className="profile">
      <div className="card">
        <img src={profile.avatar_url} alt="John" style={{ width: "100%" }} />
        <h1>{profile.username}</h1>
        <p className="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <a href="#">GITHUB URL</a>
        <p><button>Contact</button></p>
      </div>
    </section>
  );
}
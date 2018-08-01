import React from 'react';
import Avatar from './friends-list.png'
import './friends-list.css';

export default ({ friends }) => {
  if (!friends) {
    return null;
  }

  return (
    <section className="friends">
      <h3>Friends</h3>
      <div className="chip">
        <img src={Avatar} alt="Person" width="96" height="96" />
        John Doe
  <span className="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
      </div>
      <div className="chip">
        <img src={Avatar} alt="Person" width="96" height="96" />
        <span>Jane Doe</span>
        <a href="#">Challenge</a>
      </div>
    </section>
  );
}
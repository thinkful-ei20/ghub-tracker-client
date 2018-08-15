import React from 'react';
// import { Redirect } from 'react-router-dom';

import './friends-page.css';

export default function FriendsPage() {
  return (
      <main>
        <div className="friends-page">
        <h2>Add friend</h2>
        <p>Input the github username here to add a friend</p>
        <hr />

        <form className="add-friend-form" onSubmit="">
          <label>Github username</label>
          <input type="text" name="" />
          <button></button>
        </form>

        </div>
      </main>
    )
}
import React from 'react';
import './friends-page.css';
import FriendPageForm from './friends-page-form';

export default function FriendsPage() {
  return (
      <main>
        <div className="friends-page">
        <h2>Add friend</h2>
        <p>Input the github username here to add a friend</p>
        <hr />

        <FriendPageForm />

        {/* <form className="add-friend-form" onSubmit="">
          <label>Github username</label>
          <input type="text" name="" />
          <button>Add</button>
        </form> */}

        </div>
      </main>
    )
}
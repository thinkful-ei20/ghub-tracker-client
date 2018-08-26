import React from 'react';
import FriendPageForm from './friends-page-form';
import { Redirect } from 'react-router-dom';
import './friends-page.css';


export default function FriendsPage() {

  if (!localStorage.authToken) {
    return <Redirect to="/login" />;
  }

  return (
      <main>
        <div className="friends-page">
        <h2>Add friend</h2>
        <p>Input the github username here to add a friend</p>
        <hr />

        <FriendPageForm />

        </div>
      </main>
    )
}
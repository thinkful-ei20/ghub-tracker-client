import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const {
        reason,
        message,
        location
      } = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export const getPublicProfile = username => () => {
  return fetch(`${API_BASE_URL}/users/${username}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => err)
}

export const sendFriendRequest = receivingUser => (dispatch, getState) => {
  const authToken = getState().auth.authToken
  return fetch(`${API_BASE_URL}/users/addFriend/${receivingUser}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .catch(err => err)
}

export const acceptRequest = sendingUser => (dispatch, getState) => {
  const authToken = getState().auth.authToken
  return fetch(`${API_BASE_URL}/users/acceptFriend/${sendingUser}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .catch(err => err)
}
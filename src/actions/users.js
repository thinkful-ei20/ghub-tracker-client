import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


export const GET_FRIENDS_REQUEST = 'GET_FRIENDS_REQUEST'
export const getFriendsRequest = () => ({
  type: GET_FRIENDS_REQUEST
})

export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const getFriendsSuccess = friends => ({
  type: GET_FRIENDS_SUCCESS,
  friends
})

export const GET_FRIENDS_ERROR = 'GET_FRIENDS_ERROR'
export const getFriendsError = error => ({
  type: GET_FRIENDS_ERROR,
  error
})

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
  // return fetch(`${API_BASE_URL}/users/${username}`)
  return fetch(`${API_BASE_URL}/users/profile/${username}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => err)
}

export const sendFriendRequest = receivingUser => (dispatch, getState) => {
  console.log('SentFriendRequest')
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

export const getFriends = () => (dispatch, getState) => {
  dispatch(getFriendsRequest())
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users/dashboard`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(friends => dispatch(getFriendsSuccess(friends)))
    .catch(error => dispatch(getFriendsError(error)))
}

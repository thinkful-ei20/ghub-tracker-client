import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const SEND_USER_CHALLENGE_REQUEST = 'SEND_USER_CHALLENGE_REQUEST';
export const sendUserChallengeRequest = () => ({
  type: SEND_USER_CHALLENGE_REQUEST
});

export const SEND_USER_CHALLENGE_SUCCESS = 'SEND_USER_CHALLENGE_SUCCESS';
export const sendUserChallengeSuccess = () => ({
  type: SEND_USER_CHALLENGE_SUCCESS
});

export const SEND_USER_CHALLENGE_ERROR = 'SEND_USER_CHALLENGE_ERROR';
export const sendUserChallengeError = error => ({
  type: SEND_USER_CHALLENGE_ERROR,
  error
});

export const sendChallenge = receivingUser => (dispatch, getState) => {
  dispatch(sendUserChallengeRequest());
  const authToken = getState().auth.authToken
  fetch(`${API_BASE_URL}/challenges/send/${receivingUser}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(sendUserChallengeSuccess());
    })
    .catch(error => {
      dispatch(sendUserChallengeError(error));
    });
}


export const ACCEPT_USER_CHALLENGE_REQUEST = 'ACCEPT_USER_CHALLENGE_REQUEST';
export const acceptUserChallengeRequest = () => ({
  type: ACCEPT_USER_CHALLENGE_REQUEST
});

export const ACCEPT_USER_CHALLENGE_SUCCESS = 'ACCEPT_USER_CHALLENGE_SUCCESS';
export const acceptUserChallengeSuccess = () => ({
  type: ACCEPT_USER_CHALLENGE_SUCCESS
});

export const ACCEPT_USER_CHALLENGE_ERROR = 'ACCEPT_USER_CHALLENGE_ERROR';
export const acceptUserChallengeError = error => ({
  type: ACCEPT_USER_CHALLENGE_ERROR,
  error
});

export const acceptChallenge = sendingUser => (dispatch, getState) => {
  dispatch(acceptUserChallengeRequest());
  const authToken = getState().auth.authToken
  return fetch(`${API_BASE_URL}/challenges/accept/${sendingUser}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(acceptUserChallengeSuccess());
    })
    .catch(error => {
      dispatch(acceptUserChallengeError(error));
    });
}

export const CANCEL_USER_CHALLENGE_REQUEST = 'CANCEL_USER_CHALLENGE_REQUEST';
export const cancelUserChallengeRequest = () => ({
  type: CANCEL_USER_CHALLENGE_REQUEST
});

export const CANCEL_USER_CHALLENGE_SUCCESS = 'CANCEL_USER_CHALLENGE_SUCCESS';
export const cancelUserChallengeSuccess = () => ({
  type: CANCEL_USER_CHALLENGE_SUCCESS
});

export const CANCEL_USER_CHALLENGE_ERROR = 'CANCEL_USER_CHALLENGE_ERROR';
export const cancelUserChallengeError = error => ({
  type: CANCEL_USER_CHALLENGE_ERROR,
  error
});

export const cancelChallenge = recievingUser => (dispatch, getState) => {
  console.log('reci user: ', recievingUser);
  dispatch(cancelUserChallengeRequest());
  const authToken = getState().auth.authToken
  return fetch(`${API_BASE_URL}/challenges/delete/${recievingUser}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      dispatch(cancelUserChallengeSuccess());
    })
    .catch(error => {
      dispatch(cancelUserChallengeError(error));
    });
}


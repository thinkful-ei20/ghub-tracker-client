import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const sendChallenge = receivingUser => (dispatch, getState) => {
  const authToken = getState().auth.authToken
  return fetch(`${API_BASE_URL}/challenges/send/${receivingUser}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .catch(err => err)
}

export const acceptChallenge = sendingUser => (dispatch, getState) => {
  const authToken = getState().auth.authToken
  return fetch(`${API_BASE_URL}/challenges/accept/${sendingUser}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .catch(err => err)
}

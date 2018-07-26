import { API_BASE_URL } from '../config';

export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_PROFILE_REQUEST';
export const fetchUserProfileRequest = () => ({
  type: FETCH_USER_PROFILE_REQUEST
});

export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const fetchUserProfileSuccess = profile => ({
  type: FETCH_USER_PROFILE_SUCCESS,
  profile
});

export const FETCH_USER_PROFILE_ERROR = 'FETCH_USER_PROFILE_ERROR';
export const fetchUserProfileError = error => ({
  type: FETCH_USER_PROFILE_ERROR,
  error
});

export const fetchUserProfile = () => (dispatch, getState) => {
  dispatch(fetchUserProfileRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/users/profile`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(profile => {
      dispatch(fetchUserProfileSuccess(profile));
    })
    .catch(error => {
      dispatch(fetchUserProfileError(error));
    });
};

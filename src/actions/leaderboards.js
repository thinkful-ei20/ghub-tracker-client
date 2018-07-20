import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils';

export const GET_PUBLIC_LEADERBOARD_DATA_REQUEST = 'GET_PUBLIC_LEADERBOARD_DATA_REQUEST'
export const getPublicLeaderboardDataRequest = () => ({
  type: GET_PUBLIC_LEADERBOARD_DATA_REQUEST
})

export const GET_PUBLIC_LEADERBOARD_DATA_SUCCESS = 'GET_PUBLIC_LEADERBOARD_DATA_SUCCESS'
export const getPublicLeaderboardDataSuccess = data => ({
  type: GET_PUBLIC_LEADERBOARD_DATA_SUCCESS,
  data
})

export const GET_PUBLIC_LEADERBOARD_DATA_ERROR = 'GET_PUBLIC_LEADERBOARD_DATA_ERROR'
export const getPublicLeaderboardDataError = error => ({
  type: GET_PUBLIC_LEADERBOARD_DATA_ERROR,
  error
})

export const getPublicLeaderboardData = leaderboardType => dispatch => {
  dispatch(getPublicLeaderboardDataRequest())
  return fetch(`${API_BASE_URL}/leaderboards/${leaderboardType}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getPublicLeaderboardDataSuccess(data)))
    .catch(error => dispatch(getPublicLeaderboardDataError(error)))
}
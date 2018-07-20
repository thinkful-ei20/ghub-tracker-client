import { API_BASE_URL } from '../config'
import { normalizeResponseErrors } from './utils';

export const GET_PUBLIC_LEADERBOARD_REQUEST = 'GET_PUBLIC_LEADERBOARD_REQUEST'
export const getPublicLeaderboardRequest = () => ({
  type: GET_PUBLIC_LEADERBOARD_REQUEST
})

export const GET_PUBLIC_LEADERBOARD_SUCCESS = 'GET_PUBLIC_LEADERBOARD_SUCCESS'
export const getPublicLeaderboardSuccess = leaderboard => ({
  type: GET_PUBLIC_LEADERBOARD_SUCCESS,
  leaderboard
})

export const GET_PUBLIC_LEADERBOARD_ERROR = 'GET_PUBLIC_LEADERBOARD_ERROR'
export const getPublicLeaderboardError = error => ({
  type: GET_PUBLIC_LEADERBOARD_ERROR,
  error
})

// Gets specific public leaderboard using leaderboardType
export const getPublicLeaderboard = leaderboardType => dispatch => {
  dispatch(getPublicLeaderboardRequest())
  return fetch(`${API_BASE_URL}/leaderboards/${leaderboardType}`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(leaderboard => dispatch(getPublicLeaderboardSuccess(leaderboard)))
    .catch(error => dispatch(getPublicLeaderboardError(error)))
}
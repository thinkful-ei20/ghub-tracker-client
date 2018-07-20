import {
  GET_PUBLIC_LEADERBOARD_REQUEST,
  GET_PUBLIC_LEADERBOARD_SUCCESS,
  GET_PUBLIC_LEADERBOARD_ERROR
} from '../actions/leaderboards'

const initialState = {
  loading: false,
  error: null,
  leaderboard: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLIC_LEADERBOARD_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_PUBLIC_LEADERBOARD_SUCCESS:
      return { ...state, loading: false, leaderboard: action.leaderboard }
    case GET_PUBLIC_LEADERBOARD_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}


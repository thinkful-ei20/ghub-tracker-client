import {
  GET_PUBLIC_LEADERBOARD_DATA_REQUEST,
  GET_PUBLIC_LEADERBOARD_DATA_SUCCESS,
  GET_PUBLIC_LEADERBOARD_DATA_ERROR
} from '../actions/leaderboards'

const initialState = {
  loading: false,
  error: null,
  data: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PUBLIC_LEADERBOARD_DATA_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_PUBLIC_LEADERBOARD_DATA_SUCCESS:
      return { ...state, loading: false, data: action.data }
    case GET_PUBLIC_LEADERBOARD_DATA_ERROR:
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}


import {
  SEND_USER_CHALLENGE_REQUEST,
  SEND_USER_CHALLENGE_SUCCESS,
  SEND_USER_CHALLENGE_ERROR,
  ACCEPT_USER_CHALLENGE_REQUEST,
  ACCEPT_USER_CHALLENGE_SUCCESS,
  ACCEPT_USER_CHALLENGE_ERROR,
  CANCEL_USER_CHALLENGE_REQUEST,
  CANCEL_USER_CHALLENGE_SUCCESS,
  CANCEL_USER_CHALLENGE_ERROR
} from '../actions/challenges';

const initialState = {
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_USER_CHALLENGE_REQUEST:
    case ACCEPT_USER_CHALLENGE_REQUEST:
    case CANCEL_USER_CHALLENGE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case SEND_USER_CHALLENGE_SUCCESS:
    case ACCEPT_USER_CHALLENGE_SUCCESS:
    case CANCEL_USER_CHALLENGE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null
      });
    case SEND_USER_CHALLENGE_ERROR:
    case ACCEPT_USER_CHALLENGE_ERROR:
    case CANCEL_USER_CHALLENGE_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    default: return state;
  }
}
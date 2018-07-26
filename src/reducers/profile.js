import {
  FETCH_USER_PROFILE_REQUEST,
  FETCH_USER_PROFILE_SUCCESS,
  FETCH_USER_PROFILE_ERROR
} from '../actions/profile';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case FETCH_USER_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        data: action.profile,
        loading: false,
        error: null
      });
    case FETCH_USER_PROFILE_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    default: return state;
  }
}

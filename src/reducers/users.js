import {
  GET_FRIENDS_REQUEST,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_ERROR
} from '../actions/users'

const initialState = {
  loading: false,
  error: null,
  data: []
}

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_FRIENDS_REQUEST:
//       return { ...state, loading: true, error: null }
//     case GET_FRIENDS_SUCCESS:
//       return { ...state, loading: false, friends: action.friends }
//     case GET_FRIENDS_ERROR:
//       return { ...state, loading: false, error: action.error }
//     default:
//       return state
//   }
// }


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case GET_FRIENDS_SUCCESS:
      return Object.assign({}, state, {
        data: action.friends,
        loading: false,
        error: null
      });
    case GET_FRIENDS_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    default: return state;
  }
}


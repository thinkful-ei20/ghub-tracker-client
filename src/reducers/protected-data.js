import {
  FETCH_PROTECTED_DATA_SUCCESS,
  FETCH_PROTECTED_DATA_ERROR,
  FETCH_PROTECTED_DATA_REQUEST
} from '../actions/protected-data';

const initialState = {
  data: '',
  error: null,
  loading: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROTECTED_DATA_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_PROTECTED_DATA_ERROR:
      return { ...state, loading: false, error: action.error }
    case FETCH_PROTECTED_DATA_SUCCESS:
      return { ...state, loading: false, data: action.data }
<<<<<<< HEAD
    default:
      return state
=======
    default: return state;
>>>>>>> a402734c255a55092a1d784af8749268382e91d9
  }
}

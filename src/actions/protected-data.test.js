import {
  FETCH_PROTECTED_DATA_ERROR,
  FETCH_PROTECTED_DATA_REQUEST,
  FETCH_PROTECTED_DATA_SUCCESS,
  fetchProtectedDataError,
  fetchProtectedDataRequest,
  fetchProtectedDataSuccess,
  fetchProtectedData
} from './protected-data';
import { API_BASE_URL } from '../config';

describe('fetchProtectedDataError', () => {
  it('Should return the action', () => {
    const error = '404'
    const action = fetchProtectedDataError(error);
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchProtectedDataRequest', () => {
  it('Should return the action', () => {
    const action = fetchProtectedDataRequest()
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_REQUEST);
  });
});
  
describe('fetchProtectedDataSuccess', () => {
  it('Should return the action', () => {
    const data = { username: 'awesome' }
    const action = fetchProtectedDataSuccess(data);
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
    expect(action.data).toEqual(data);
  });
});

describe('fetchBoard', () => {
  it('Should dispatch fetchBoardSuccess', () => {
    const data = { username: 'awesome' }

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return {data};
        }
      })
    );

    const dispatch = jest.fn();
    return fetchProtectedData()(dispatch, () => ({ auth: { authToken: 'token' }})).then(() => {
      expect(fetch)
        .toHaveBeenCalledWith("http://localhost:8080/api/user/profile", {"headers": {"Authorization": "Bearer token"}, "method": "GET"});
      expect(dispatch).toHaveBeenCalledWith(fetchProtectedDataRequest());
      expect(dispatch).toHaveBeenCalledWith(fetchProtectedDataSuccess(data));
    });
  });
});
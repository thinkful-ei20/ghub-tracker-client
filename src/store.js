import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import { setAuthToken, refreshAuthToken } from './actions/auth';
import leaderboardReducer from './reducers/leaderboard';
import profileReducer from './reducers/profile';
import friendReducer from './reducers/users';
import challengesReducer from './reducers/challenges';

const store = createStore(
	combineReducers({
		form: formReducer,
		auth: authReducer,
		protectedData: protectedDataReducer,
		leaderboard: leaderboardReducer,
    profile: profileReducer,
		friends: friendReducer,
		challenges: challengesReducer
	}),
	composeWithDevTools(applyMiddleware(thunk))
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
	const token = authToken;
	store.dispatch(setAuthToken(token));
	store.dispatch(refreshAuthToken());
}

export default store;
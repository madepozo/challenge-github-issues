import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { issuesReducer } from 'reducers/issuesReducer';

const reducers = combineReducers({
	issues: issuesReducer,
});

export default createStore(reducers, applyMiddleware(thunkMiddleware));

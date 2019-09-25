import isLoggedReducer from './isLogged';
import mostPopularPageReducer from './mostPopularPage'
import {
	combineReducers
} from 'redux';

const allReducers = combineReducers({
	isLogged: isLoggedReducer,
	mostPopularPage: mostPopularPageReducer
});

export default allReducers;
import { combineReducers } from 'redux';
import productAdded from './productAdded';

export default combineReducers({
	productAdded: productAdded,
});

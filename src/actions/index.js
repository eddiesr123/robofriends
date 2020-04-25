import robotHash from '../apis/robotHash';
import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS } from './types';

export const setSearchField = (text) => {
	return {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	};
};

export const fetchRobots = () => async (dispatch) => {
	const response = await robotHash.get('/users');

	dispatch({
		type: FETCH_ROBOTS,
		payload: response.data
	});
};

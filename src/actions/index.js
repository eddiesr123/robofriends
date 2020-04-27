import robotHash from '../apis/robotHash';
import { CHANGE_SEARCH_FIELD, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_SUCCESS, FETCH_ROBOTS_FAILED } from './types';

export const setSearchField = (text) => {
	return {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	};
};

export const fetchRobots = () => async (dispatch) => {
	dispatch({ type: FETCH_ROBOTS_PENDING });
	try {
		const response = await robotHash.get('/users');

		dispatch({
			type: FETCH_ROBOTS_SUCCESS,
			payload: response.data
		});
	} catch (error) {
		dispatch({
			type: FETCH_ROBOTS_FAILED,
			payload: error
		});
	}
};

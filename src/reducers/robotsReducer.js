import { FETCH_ROBOTS_SUCCESS, FETCH_ROBOTS_PENDING, FETCH_ROBOTS_FAILED } from '../actions/types';

const initialState = {
	robots: [],
	isPending: false,
	error: {}
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case FETCH_ROBOTS_PENDING:
			return { ...state, isPending: true };
		case FETCH_ROBOTS_SUCCESS:
			return { ...state, robots: action.payload, isPending: false };
		case FETCH_ROBOTS_FAILED:
			return { ...state, error: action.payload, isPending: false };
		default:
			return state;
	}
};

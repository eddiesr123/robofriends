import { FETCH_ROBOTS } from '../actions/types';

const initialState = {
	robots: []
};

export default (state = initialState, action = {}) => {
	switch (action.type) {
		case FETCH_ROBOTS:
			return { ...state, robots: action.payload };
		default:
			return state;
	}
};

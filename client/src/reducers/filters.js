import { SET_FILTER_TEXT, SET_FILTER_TYPE } from '../actions/types';

const initialState = {
	filterText: '',
	filterType: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_FILTER_TEXT:
			return { ...state, filterText: action.payload };
		case SET_FILTER_TYPE:
			return { ...state, filterType: action.payload };
		default:
			return state;
	}
};

import { SEARCH_SONG, RESET_SONGS } from '../actions/types';

const initialState = {
	songs: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_SONG:
			return { ...state, songs: action.payload };
		case RESET_SONGS:
			return { ...state, songs: [] };
		default:
			return state;
	}
};

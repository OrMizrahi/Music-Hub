import { SEARCH_SONG, RESET_SONGS } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case SEARCH_SONG:
			return action.payload;
		case RESET_SONGS:
			return [];
		default:
			return state;
	}
};

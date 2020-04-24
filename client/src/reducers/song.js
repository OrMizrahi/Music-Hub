import { SEARCH_SONG, RESET_SONGS, SONGS_LOADING } from '../actions/types';

const initialState = {
	songs: [],
	loading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_SONG:
			return { ...state, songs: action.payload, loading: false };
		case RESET_SONGS:
			return { ...state, songs: [] };
		case SONGS_LOADING:
			return { ...state, loading: true };
		default:
			return state;
	}
};

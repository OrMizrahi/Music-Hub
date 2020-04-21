import {
	FETCH_PLAYLISTS,
	ADD_PLAYLIST,
	DELETE_PLAYLIST,
	ADD_SONG_TO_PLAYLIST,
	REMOVE_SONG_FROM_PLAYLIST,
	EDIT_PLAYLIST,
} from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_PLAYLISTS:
			return action.payload;
		case ADD_PLAYLIST:
			return [...state, action.payload];
		case DELETE_PLAYLIST:
			return state.filter((playlist) => playlist.name !== action.payload);
		case ADD_SONG_TO_PLAYLIST:
			return action.payload;
		case REMOVE_SONG_FROM_PLAYLIST:
			return action.payload;
		case EDIT_PLAYLIST:
			return action.payload;
		default:
			return state;
	}
};

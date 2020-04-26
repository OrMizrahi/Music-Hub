import {
	FETCH_PLAYLISTS,
	ADD_PLAYLIST,
	DELETE_PLAYLIST,
	ADD_SONG_TO_PLAYLIST,
	REMOVE_SONG_FROM_PLAYLIST,
	EDIT_PLAYLIST,
	PLAYLISTS_LOADING,
	PLAYLISTS_FINISHED_LOADING,
} from '../actions/types';

const initialState = {
	playlists: [],
	isLoading: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PLAYLISTS:
			return { ...state, playlists: action.payload };
		case ADD_PLAYLIST:
			return {
				...state,
				playlists: [...state.playlists, action.payload],
			};
		case DELETE_PLAYLIST:
			return {
				...state,
				playlists: state.playlists.filter(
					(playlist) => playlist.name !== action.payload
				),
			};
		case ADD_SONG_TO_PLAYLIST:
			return { ...state, playlists: action.payload };
		case REMOVE_SONG_FROM_PLAYLIST:
			return { ...state, playlists: action.payload };
		case EDIT_PLAYLIST:
			return { ...state, playlists: action.payload };
		case PLAYLISTS_LOADING:
			return { ...state, isLoading: true };
		case PLAYLISTS_FINISHED_LOADING:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};

import authReducer from './auth';
import { combineReducers } from 'redux';
import songReducer from './song';
import playlistReducer from './playlist';
import filtersReducer from './filters';

export default combineReducers({
	auth: authReducer,
	songs: songReducer,
	playlists: playlistReducer,
	filters: filtersReducer,
});

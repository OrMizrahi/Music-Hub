import authReducer from './auth';
import { combineReducers } from 'redux';
import songReducer from './song';
import playlistReducer from './playlist';

export default combineReducers({
	auth: authReducer,
	songs: songReducer,
	playlists: playlistReducer,
});

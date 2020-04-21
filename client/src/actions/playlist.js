import {
	FETCH_PLAYLISTS,
	ADD_PLAYLIST,
	DELETE_PLAYLIST,
	ADD_SONG_TO_PLAYLIST,
	REMOVE_SONG_FROM_PLAYLIST,
	EDIT_PLAYLIST,
} from './types';
import axios from 'axios';

export const fetchPlaylists = () => {
	return async (dispatch) => {
		const res = await axios.get('/api/playlists');
		dispatch({
			type: FETCH_PLAYLISTS,
			payload: res.data,
		});
	};
};

export const addPlaylist = (name, description) => {
	return async (dispatch) => {
		const res = await axios.post('/api/playlist/create', {
			name,
			description,
			songs: [],
		});
		dispatch({
			type: ADD_PLAYLIST,
			payload: res.data,
		});
	};
};

export const deletePlaylist = (name) => {
	return async (dispatch) => {
		await axios.delete(`/api/playlist/delete/${name}`);

		dispatch({
			type: DELETE_PLAYLIST,
			payload: name,
		});
	};
};

export const addSongToPlaylist = (songAndPlaylist) => {
	return async (dispatch) => {
		await axios.post('/api/playlist/songs/add', songAndPlaylist);

		dispatch({
			type: ADD_SONG_TO_PLAYLIST,
			payload: songAndPlaylist,
		});
	};
};

export const removeSongFromPlaylist = (songName, playlistName) => {
	return async (dispatch) => {
		const res = await axios.post('/api/playlist/songs/remove', {
			songName,
			playlistName,
		});

		dispatch({
			type: REMOVE_SONG_FROM_PLAYLIST,
			payload: res.data,
		});
	};
};

export const editPlaylist = (newName, newDescription, oldName) => {
	return async (dispatch) => {
		const res = await axios.post('/api/playlist/edit', {
			newName,
			newDescription,
			oldName,
		});

		dispatch({
			type: EDIT_PLAYLIST,
			payload: res.data,
		});
	};
};

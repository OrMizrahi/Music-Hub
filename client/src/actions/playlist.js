import {
	FETCH_PLAYLISTS,
	ADD_PLAYLIST,
	DELETE_PLAYLIST,
	ADD_SONG_TO_PLAYLIST,
	REMOVE_SONG_FROM_PLAYLIST,
	EDIT_PLAYLIST,
	PLAYLISTS_LOADING,
	PLAYLISTS_FINISHED_LOADING,
} from './types';
import axios from 'axios';

export const fetchPlaylists = () => {
	return async (dispatch) => {
		dispatch(setPlaylistsLoading());
		const res = await axios.get('/api/playlists');
		dispatch(setPlaylistsFinihsedLoading());
		dispatch({
			type: FETCH_PLAYLISTS,
			payload: res.data,
		});
	};
};

export const addPlaylist = (name, description) => {
	return async (dispatch) => {
		dispatch(setPlaylistsLoading());
		const res = await axios.post('/api/playlists/create', {
			name,
			description,
			songs: [],
		});
		dispatch(setPlaylistsFinihsedLoading());
		dispatch({
			type: ADD_PLAYLIST,
			payload: res.data,
		});
	};
};

export const deletePlaylist = (name) => {
	return async (dispatch) => {
		dispatch(setPlaylistsLoading());
		await axios.delete(`/api/playlists/delete/${name}`);
		dispatch(setPlaylistsFinihsedLoading());
		dispatch({
			type: DELETE_PLAYLIST,
			payload: name,
		});
	};
};

export const addSongToPlaylist = (songAndPlaylist) => {
	return async (dispatch) => {
		dispatch(setPlaylistsLoading());
		const res = await axios.post('/api/playlists/songs/add', songAndPlaylist);
		dispatch(setPlaylistsFinihsedLoading());
		dispatch({
			type: ADD_SONG_TO_PLAYLIST,
			payload: res.data,
		});
	};
};

export const removeSongFromPlaylist = (songName, playlistName) => {
	return async (dispatch) => {
		dispatch(setPlaylistsLoading());
		const res = await axios.post('/api/playlists/songs/remove', {
			songName,
			playlistName,
		});
		dispatch(setPlaylistsFinihsedLoading());
		dispatch({
			type: REMOVE_SONG_FROM_PLAYLIST,
			payload: res.data,
		});
	};
};

export const editPlaylist = (newName, newDescription, oldName) => {
	return async (dispatch) => {
		dispatch(setPlaylistsLoading());
		const res = await axios.post('/api/playlists/edit', {
			newName,
			newDescription,
			oldName,
		});
		dispatch(setPlaylistsFinihsedLoading());
		dispatch({
			type: EDIT_PLAYLIST,
			payload: res.data,
		});
	};
};

export const setPlaylistsLoading = () => {
	return {
		type: PLAYLISTS_LOADING,
	};
};

export const setPlaylistsFinihsedLoading = () => {
	return {
		type: PLAYLISTS_FINISHED_LOADING,
	};
};

import { SEARCH_SONG, RESET_SONGS } from './types';
import axios from 'axios';

export const searchSong = (song) => async (dispatch) => {
	const res = await axios.get(
		`http://www.songsterr.com/a/ra/songs.json?pattern=${song}`
	);

	dispatch({
		type: SEARCH_SONG,
		payload: res.data,
	});
};

export const searchSong2 = (song) => async (dispatch) => {
	const res = await axios.get(
		`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${song}`
	);

	dispatch({
		type: SEARCH_SONG,
		payload: res.data.data,
	});
};

export const resetSongs = () => {
	return {
		type: RESET_SONGS,
	};
};

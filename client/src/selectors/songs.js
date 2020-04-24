import { createSelector } from 'reselect';

const searchSongsSelector = (state) => state.songs.songs;
const playlistsSelector = (state) => state.playlists;
const filterTextSelector = (state) => state.filters.filterText;
const filterTypeSelector = (state) => state.filters.filterType;

export const searchSongsFilter = createSelector(
	searchSongsSelector,
	filterTypeSelector,
	filterTextSelector,
	(songs, type, text) => {
		switch (type) {
			case 'Song Name':
				return songs.filter((song) => {
					return song.title.toLowerCase().includes(text.toLowerCase());
				});
			case 'Artist':
				return songs.filter((song) => {
					return song.artist.name.toLowerCase().includes(text.toLowerCase());
				});
			default:
				return songs;
		}
	}
);

export const playlistSongsFilter = (id) => {
	return createSelector(
		playlistsSelector,
		filterTypeSelector,
		filterTextSelector,
		(playlists, type, text) => {
			switch (type) {
				case 'Song Name':
					return playlists[id].songs.filter((song) => {
						return song.name.toLowerCase().includes(text.toLowerCase());
					});
				case 'Artist':
					return playlists[id].songs.filter((song) => {
						return song.artist.toLowerCase().includes(text.toLowerCase());
					});
				default:
					return playlists[id].songs;
			}
		}
	);
};

export const playlistsFilter = createSelector(
	playlistsSelector,
	filterTextSelector,
	(playlists, text) => {
		return playlists.filter((playlist) =>
			playlist.name.toLowerCase().includes(text.toLowerCase())
		);
	}
);

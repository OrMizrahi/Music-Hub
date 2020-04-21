import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import { fetchUser } from '../actions';
import { useEffect } from 'react';
import Landing from './Landing';
import Footer from './Footer';
import Dashboard from './Dashboard';
import PlaylistForm from './PlaylistForm';
import Playlists from './Playlists';
import { useDispatch } from 'react-redux';
import PlaylistSongs from './PlaylistSongs';
import Songs from './Songs';

const ArtistsList = () => <h2>ArtistsList</h2>;
const NotFoundPage = () => <h2>NotFound</h2>;

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' component={Landing} exact />
				<Route path='/playlists' component={Playlists} />
				<Route path='/artists' component={ArtistsList} />
				<Route path='/playlist/edit/:id' component={PlaylistForm} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/playlist/create' component={PlaylistForm} />
				<Route path='/playlist/songs/:id' component={PlaylistSongs} />
				<Route path='/songs' component={Songs} />
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

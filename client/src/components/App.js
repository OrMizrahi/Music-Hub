import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './NavBar';
import { fetchUser } from '../actions';
import { useEffect } from 'react';
import Login from './Login';
import Footer from './Footer';
import Dashboard from './Dashboard';
import PlaylistForm from './PlaylistForm';
import Playlists from './Playlists';
import { useDispatch } from 'react-redux';
import PlaylistSongs from './PlaylistSongs';
import Songs from './Songs';
import { PublicRoute } from '../routers/PublicRoute';
import { PrivateRoute } from '../routers/PrivateRoute';

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
				<PublicRoute path='/' component={Login} exact />
				<PrivateRoute path='/playlists' component={Playlists} />
				<PrivateRoute path='/artists' component={ArtistsList} />
				<PrivateRoute path='/playlist/edit/:id' component={PlaylistForm} />
				<PrivateRoute path='/dashboard' component={Dashboard} />
				<PrivateRoute path='/playlist/create' component={PlaylistForm} />
				<PrivateRoute path='/playlist/songs/:id' component={PlaylistSongs} />
				<PrivateRoute path='/songs' component={Songs} />
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

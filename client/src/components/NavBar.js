import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchSong2, resetSongs } from '../actions/songs';
import { useState } from 'react';
import { withRouter } from 'react-router-dom';

const NavBar = ({ history }) => {
	const auth = useSelector((state) => state.auth);
	const [song, setSong] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchSong2(song));
		setSong('');
		history.push('/songs');
		dispatch(resetSongs());
	};

	const renderContent = () => {
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<React.Fragment>
						<li className='nav-item'>
							<a href='/auth/google' className='nav-link'>
								Login with Google
							</a>
						</li>
						<li className='nav-item'>
							<a href='/auth/facebook' className='nav-link'>
								Login with Facebook
							</a>
						</li>
					</React.Fragment>
				);

			default:
				return (
					<React.Fragment>
						<li className='nav-item'>
							<a className='nav-link' href='/auth/logout'>
								Logout
							</a>
						</li>
						<li className='nav-item'>
							<Link to='/playlists' className='nav-link'>
								My Playlists
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/playlist/create' className='nav-link'>
								Create Playlist
							</Link>
						</li>
						<form onSubmit={handleSubmit} className='form-inline'>
							<input
								style={{ height: 'auto' }}
								value={song}
								onChange={(e) => setSong(e.target.value)}
								className='form-control mr-sm-2'
								type='search'
								placeholder='Search for a song...'
								aria-label='Search'
							/>
							<button className='btn btn-light my-sm-0 ' type='submit'>
								<i className='fa fa-search'></i>
							</button>
						</form>
					</React.Fragment>
				);
		}
	};

	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
			<a href='#' className='navbar-brand'>
				<h4 style={{ color: 'aquamarine' }}>Music Hub</h4>
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mx-auto'>
					<li className='nav-item active'>
						<Link to={auth ? '/dashboard' : '/'} className='nav-link'>
							Home
						</Link>
					</li>
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(NavBar);

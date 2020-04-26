import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../components/Spinner';

export const PrivateRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			component={(props) => {
				switch (auth) {
					case null:
						return (
							<div>
								<Spinner show={true} />;
							</div>
						);
					case false:
						return <Redirect to='/' />;
					default:
						return (
							<div>
								<Component {...props} />
							</div>
						);
				}
			}}
		/>
	);
};

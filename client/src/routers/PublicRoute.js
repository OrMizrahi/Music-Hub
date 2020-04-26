import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component: Component, ...rest }) => {
	const auth = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			component={(props) =>
				auth ? (
					<Redirect to='/dashboard' />
				) : (
					<div>
						<Component {...props} />
					</div>
				)
			}
		/>
	);
};

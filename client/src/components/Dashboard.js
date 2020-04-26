import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import '../styles/test.css';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const Dashboard = () => {
	const user = useSelector((state) => state.auth);
	const classes = useStyles();

	return (
		<div className='box-layout'>
			{user && <h1>Welcome {user.name}</h1>}
			<div className={classes.root}>
				{user && (
					<Avatar alt='My Avatar' src={user.image} className={classes.large} />
				)}
			</div>
		</div>
	);
};

export default Dashboard;

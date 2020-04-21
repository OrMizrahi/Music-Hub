import { FETCH_USER } from './types';
import axios from 'axios';

export const fetchUser = () => async (dispatch) => {
	const user = await axios.get('/api/current_user');

	dispatch({
		type: FETCH_USER,
		payload: user.data,
	});
};

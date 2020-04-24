import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterText, setFilterType } from '../actions/songs';

const SongsFilter = ({ playlistsFilter }) => {
	const inputEl = useRef(null);
	const dispatch = useDispatch();

	const setType = (e) => {
		dispatch(setFilterType(e.target.value));
		inputEl.current.focus();
	};

	const setText = (e) => {
		dispatch(setFilterText(e.target.value));
	};

	return (
		<div
			className='col-auto my-1'
			style={{ display: 'flex', justifyContent: 'center' }}
		>
			{!playlistsFilter && (
				<label className='mr-sm-2' htmlFor='inlineFormCustomSelect'>
					Filter By
				</label>
			)}
			{!playlistsFilter && (
				<select
					onChange={setType}
					className='custom-select mr-sm-2 col-sm-4'
					id='inlineFormCustomSelect'
				>
					<option selected>Choose...</option>
					<option value='Song Name'>Song Name</option>
					<option value='Artist'>Artist</option>
				</select>
			)}
			<div className='form-group col-sm-12'>
				<input
					onChange={setText}
					ref={inputEl}
					className='form-control'
					id='inputdefault'
					type='text'
					placeholder={playlistsFilter ? 'enter playlist name' : ''}
					// disabled={selectEl.current.value === 'Choose...'}
				/>
			</div>
		</div>
	);
};

export default SongsFilter;

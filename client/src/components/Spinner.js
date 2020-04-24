import React from 'react';
import spinner from './spinner.gif';

const Spinner = ({ show }) => {
	if (show) {
		return (
			<React.Fragment>
				<img
					src={spinner}
					alt='Loading...'
					style={{ width: '200px', margin: 'auto', display: 'block' }}
				/>
			</React.Fragment>
		);
	} else {
		return <React.Fragment></React.Fragment>;
	}
};

export default Spinner;

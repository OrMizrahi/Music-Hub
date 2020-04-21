import React from 'react';

const Footer = () => {
	return (
		// <footer
		// 	style={{
		// 		position: 'fixed',
		// 		bottom: '0',
		// 		width: '100%',
		// 		textAlign: 'center',
		// 	}}
		// 	className='page-footer'
		// >
		// 	<div className='footer-copyright'>
		// 		<div className='container'>
		// 			© 2014 Copyright Text
		// 			<a className='grey-text text-lighten-4 right' href='#!'>
		// 				More Links
		// 			</a>
		// 		</div>
		// 	</div>
		// </footer>
		<div>
			<footer
				className='footer navbar fixed-bottom'
				style={{ background: 'beige' }}
			>
				<div className='container' style={{ textAlign: 'center' }}>
					<span className='text-muted'>© 2020 Copyright || Or Mizrahi.</span>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

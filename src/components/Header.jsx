import React from 'react';
import { Box } from '@mui/system';
import logo from '../svg/logo.svg';

const Header = () => {
	return (
		// <header>
		<Box
			className="header"
			sx={{
				position: 'relative',
				display: 'flex',
				flexWrap: 'wrap',
				width: '100%',
				height: '5rem',
				margin: '0 auto',
				padding: '0 5px',
				boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
				justifyContent: 'space-between',
			}}
		>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="tab-edge">
				<div className="tab"></div>
			</div>
		</Box>

		// </header>
	);
};

export default Header;

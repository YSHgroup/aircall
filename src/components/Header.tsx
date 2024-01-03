import React from 'react';
import { Box } from '@mui/system';
import logo from '../svg/logo.svg';

const Header = () => {
	return (
		<Box
			className='header'
			sx={{
				backgroundColor: 'var(--background-paper-color)',
				position: 'relative',
				display: 'flex',
				flexWrap: 'wrap',
				width: '100%',
				height: '5rem',
				margin: '0 auto',
				padding: '0 5px',
				boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
				justifyContent: 'space-between',
				// backgroundImage: 'linear-gradient(#00000066 5%, white 60%)',
			}}
		>
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className='tab-edge'>
				<div className='tab'></div>
				<div className='inner'></div>
				<div className='rotated'></div>
			</div>
		</Box>
	);
};

export default Header;

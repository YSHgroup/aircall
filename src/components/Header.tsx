import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Box, Tab, Divider, AppBar, styled, useTheme } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import logo from '../svg/logo.svg';

const NavTab = styled(NavLink)(({theme})=> ({
	height: '100%',
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	backgroundColor: 'transparent',
  '&.active': {
    // Styles when isActive is true
    // backgroundColor: 'blue'
	borderBottom: '2px solid orange'
  },
  '&.pending': {
    // Styles when isPending is true 
    backgroundColor: 'grey'
  }
}))

const Header = () => {
	const theme = useTheme()
	return (
		<AppBar
			className='header'
			sx={{
				backgroundColor: 'var(--background-paper-color)',
				position: 'relative',
				display: 'flex',
				flexWrap: 'wrap',
				width: '100%',
				height: '4rem',
				margin: '0 auto',
				padding: '0 5px',
				boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
				justifyContent: 'space-between',
				// backgroundImage: 'linear-gradient(#00000066 5%, white 60%)',
			}}
		>
			<div className='logo'>
				<img src={logo} alt='logo' />
			</div>
			<Box className='tab-edge' display={'flex'}>
				<div className='tab'></div>
				<div className='inner'></div>
				<div className='rotated'></div>
				<Stack
					position={'absolute'}
					width={'100%'}
					height={'100%'}
					alignSelf={'center'}
					justifyContent={'center'}
					direction='row'
					// spacing={2}
					fontSize={'1rem'}
					divider={<Box height={'100%'} display={'flex'} alignItems = {'center'}><MoreVert color={'secondary'} /></Box>}
				>
					<NavTab
						theme={theme}
						to='/activity'
						className={({ isActive, isPending }) =>
							isActive ? 'active' : isPending ? 'pending' : ''
						}
					>
						Activity
					</NavTab>
					<NavTab
						to='/archive'
						className={({ isActive, isPending }) =>
							isActive ? 'active' : isPending ? 'pending' : ''
						}
					>
						Archive
					</NavTab>
				</Stack>
			</Box>
		</AppBar>
	);
};

export default Header;

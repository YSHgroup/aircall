import React from 'react';
import {
	styled,
	Box,
	AppBar,
	Toolbar,
	IconButton,
	Fab,
	Badge,
	useTheme,
} from '@mui/material';
import {
	Call,
	PersonOutlineOutlined,
	Dialpad,
	SettingsOutlined,
} from '@mui/icons-material';

const DialFab = styled(Fab)(({ theme }) => ({
	position: 'absolute',
	bottom: '1rem',
	left: 0,
	right: 0,
	margin: '0 auto',
	width: '72px',
	height: '72px',
	boxShadow: '0 0 1px ' + theme.palette.grey[500],
	border: '1px solid',
	borderColor: theme.palette.grey[400],
	backgroundColor: theme.palette.background.paper,
}));

const RecordBtn = styled('div')(({ theme }) => ({
	width: '20px',
	height: '20px',
	border: '1px solid grey',
	borderRadius: '50%',
	// padding: '5px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'&> div': {
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		backgroundColor: 'limegreen',
	},
}));

const Footer: React.FC = () => {
	const theme = useTheme();
	return (
		<AppBar
			component={'footer'}
			position='fixed'
			sx={{
				backgroundColor: (theme) => theme.palette.background.paper,
				top: 'auto',
				bottom: '18px',
				height: '58px',
				width: 'inherit',
				left: '50%',
				right: 'auto',
				transform: 'translateX(-50%)',
				borderBottomLeftRadius: '3px',
				borderBottomRightRadius: '3px',
			}}
		>
			<Toolbar
				sx={{
					[theme.breakpoints.up('sm')]: {
						minHeight: '58px',
					},
				}}
			>
				<IconButton sx={{ flexGrow: 1 }} >
					<Badge badgeContent={12} color='info'>
						<Call />
					</Badge>
				</IconButton>
				<IconButton sx={{ flexGrow: 1 }} >
					<PersonOutlineOutlined />
				</IconButton>
				<DialFab>
					<Box
						sx={{
							width: 'calc(100% - 16px)',
							height: 'calc(100% - 16px)',
							margin: 'auto',
							display: 'flex',
							borderRadius: '50%',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'limegreen',
							color: (theme) => theme.palette.primary.main,
						}}
					>
						<Dialpad />
					</Box>
				</DialFab>
				<Box sx={{ flexGrow: 3 }} />
				<IconButton sx={{ flexGrow: 1 }} >
					<SettingsOutlined />
				</IconButton>
				<IconButton sx={{ flexGrow: 1 }} >
					<RecordBtn>
						<div />
					</RecordBtn>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;

import React from 'react';
import {
	List,
	ListItemButton,
	Box,
	Stack,
	Paper,
	Typography,
	Divider,
} from '@mui/material';
import {
	Inventory2Outlined,
	PhoneCallback,
	MoreVert,
} from '@mui/icons-material';
import { useFetching } from '../hooks/useReactQuery';

const CallItem: React.FC = () => {
	return (
		<>
			<Divider
				textAlign='center'
				sx={{
					borderStyle: 'dashed',
					marginY: '10px'
				}}
			>
				July, 27 2023
			</Divider>
			<Paper
				sx={{
					marginX: '1rem',
					borderRadius: '10px',
				}}
			>
				<ListItemButton sx={{ p: 0 }} alignItems='center'>
					<Stack
						divider={<MoreVert />}
						spacing={2}
						py={2}
						pl={2}
						direction={'row'}
						width={'100%'}
						alignItems={'center'}
					>
						<Box display={'flex'} flex={'100%'} alignItems={'center'}>
							<PhoneCallback />
							<Stack pl={2}>
							<Typography fontFamily={'cursive'}>+1 607 821 0404</Typography>
							<Typography fontSize={'12px'}>
								tried to call on Apollo
							</Typography>
							</Stack>
						</Box>
						<Box display={'flex'} flex={1} alignItems={'center'}>
							<Typography>07:30</Typography>
							<Typography
								sx={{
									border: '1px solid grey',
									borderTopLeftRadius: '3px',
									borderBottomLeftRadius: '3px',
									p: '1px 3px',
									ml: '2px',
									fontSize: '10px'
								}}
							>
								PM
							</Typography>
						</Box>
					</Stack>
				</ListItemButton>
			</Paper>
		</>
	);
};

const Activity: React.FC = () => {
	const { data: activities, isLoading, isError, error } = useFetching();
	console.log(
		'data: ',
		activities,
		'isLoading: ',
		isLoading,
		'isError: ',
		isError,
		'error: ',
		error
	);
	return (
		<>
			<Paper
				sx={{
					marginX: '1rem',
					borderRadius: '10px',
					borderTopLeftRadius: 'unset',
					borderTopRightRadius: 'unset',
				}}
			>
				<Stack direction={'row'} spacing={2} p={2}>
					<Inventory2Outlined />
					<Typography>Archive all calls</Typography>
				</Stack>
			</Paper>
			<List sx={{p: 0}}>
				<CallItem></CallItem>
			</List>
		</>
	);
};

export default Activity;

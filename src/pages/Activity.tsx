import React from 'react';
import { Box } from '@mui/material';
import { useFetching } from '../hooks/useReactQuery';

const Activity = () => {
	const {data: activities, isLoading, isError, error } = useFetching()
	console.log('data: ', activities,'isLoading: ', isLoading,'isError: ', isError,'error: ', error)
	return <Box>Hello Activity</Box>;
};

export default Activity
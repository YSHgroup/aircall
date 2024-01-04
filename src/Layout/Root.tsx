import React, {} from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Header from '../components/Header';

const Root: React.FC = () => {

	const location = useLocation()
    if(location.pathname === '/') {
        return <Navigate to='activity' replace/>
    }
    return (
        <>
			<Header />
            <Outlet />
        </>
    )
}

export default Root
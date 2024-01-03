// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import { Divider, Typography } from '@mui/material';
import { router } from './routes';
import './App.css';

function App() {
	return (
		<div className='app container'>
			<Header />
			{/* <div className="container-view">Some activities should be here</div> */}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

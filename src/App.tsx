// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import { Divider, Typography } from '@mui/material';
import { router } from './routes';
import ThemeProvider from './theme';
// import './App.css';

function App() {
	return (
		<div className='app container'>
			{/* <div className="container-view">Some activities should be here</div> */}
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</div>
	);
}

export default App;

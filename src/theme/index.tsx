import React from 'react';
import {
	ThemeProvider as MUIThemeProvider,
	createTheme,
	CssBaseline,
} from '@mui/material';
import { palette } from './palette';


const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const memorizedTheme = React.useMemo(() => ({
        palette: palette
    }),[])
	const theme = createTheme( memorizedTheme );
	return (
    <MUIThemeProvider theme={theme}>
        {children}
        <CssBaseline />
    </MUIThemeProvider>);
};

export default ThemeProvider

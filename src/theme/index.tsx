import React from 'react';
import {
	ThemeProvider as MUIThemeProvider,
	createTheme,
	CssBaseline,
} from '@mui/material';
import { palette } from './palette';
import { overrides } from './overrides';


const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const memorizedTheme = React.useMemo(() => ({
        palette: palette
    }),[])
	const theme = createTheme( memorizedTheme );
    theme.components = overrides(theme)
	return (
    <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </MUIThemeProvider>);
};

export default ThemeProvider

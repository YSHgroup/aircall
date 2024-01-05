
import { Theme } from "@mui/material"

export const overrides: (theme: Theme) => {} = (theme) => ({
    MuiCssBaseline: {
        styleOverrides: {
            '*': {
                boxSizing: 'border-box'
            },
            html: {
                margin: 0,
                padding: 0,
                width: '100%',
                height: '100%',
                WebkitOverflowScrolling: 'touch',
              },
            body: {
                margin: 0,
                padding: 0,
                backgroundColor: theme.palette.grey[700]
            }
        }
    }
})
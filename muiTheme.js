// library
import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
      cardBg: 'rgba(66,165,245, 0.7)',
    },
  },
});

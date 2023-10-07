// library
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

// local
import Main from './main';
import { theme } from '../muiTheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

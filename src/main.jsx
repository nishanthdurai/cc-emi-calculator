// library
import { Container, CssBaseline } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

// local
import { AppContext } from './context';
import EMIMain from './pages/emi/emiMain';
import Test from './test';
import Header from './components/header';

const Main = () => {
  return (
    <AppContext.Provider value={{}}>
      <CssBaseline />
      <Header />
      <Container
        maxWidth={false}
        sx={{
          bgcolor: '#ECECEC',
          height: '100vh',
          overflow: 'scroll',
          py: 2,
        }}
      >
        <Routes>
          <Route path='/emi/*' element={<EMIMain />} />
          <Route path='/test' element={<Test />} />
          <Route path='/*' element={<Navigate to='/emi/*' replace />} />
        </Routes>
      </Container>
    </AppContext.Provider>
  );
};

export default Main;

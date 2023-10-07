// library
import { Container, CssBaseline } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

// local
import { AppContext } from './context';
import EMIMain from './pages/emi/emiMain';
import Test from './test';

const Main = () => {
  return (
    <AppContext.Provider value={{}}>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          width: '100vw',
          pb: 2,
          px: 2,
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

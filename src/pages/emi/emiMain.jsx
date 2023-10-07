// library
import { Route, Routes, Navigate } from 'react-router-dom';
// local
import CCEmiMain from './creditCard/ccEmiMain';

const EMIMain = () => {
  return (
    <Routes>
      <Route path='/cc' element={<CCEmiMain />} />
      <Route path='/*' element={<Navigate to='/emi/cc' replace />} />
    </Routes>
  );
};

export default EMIMain;

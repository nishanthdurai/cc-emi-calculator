// library
import { Route, Routes } from 'react-router-dom';
// local
import CCEmiMain from './creditCard/ccEmiMain';

const EMIMain = () => {
  return (
    <Routes>
      <Route path='/cc' element={<CCEmiMain />} />
    </Routes>
  );
};

export default EMIMain;

// library
import { Box, Typography } from '@mui/material';
import React from 'react';
// local
import Input from './input';
import { CCEMiContext } from '../../../context';
import { calculateEMI } from '../../../utils/emiUtils';

const CCEmiMain = () => {
  const onCalculateEMI = (loanAmount, roi, tenure) => {
    console.log(calculateEMI(loanAmount, roi, tenure, 18));
  };

  return (
    <CCEMiContext.Provider value={{ onCalculateEMI }}>
      <Box>
        <Typography>Credit card EMI</Typography>
        <Input />
      </Box>
    </CCEMiContext.Provider>
  );
};

export default CCEmiMain;

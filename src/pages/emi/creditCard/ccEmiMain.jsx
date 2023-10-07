// library
import { Box, Typography } from '@mui/material';
import React from 'react';
// local
import Input from './input';
import { CCEMiContext } from '../../../context';
import { calculateEMI } from '../../../utils/emiUtils';
import { useState } from 'react';
import RepaymentSchedule from './repaymentSchedule';

const CCEmiMain = () => {
  const [repaymentSchedule, setRepaymentSchedule] = useState([]);

  const onCalculateEMI = (loanAmount, roi, tenure) => {
    setRepaymentSchedule(calculateEMI(loanAmount, roi, tenure, 18).schedule);
  };

  return (
    <CCEMiContext.Provider value={{ onCalculateEMI, repaymentSchedule }}>
      <Box display='flex' gap={2} flexDirection='column'>
        {/* page heading */}
        <Typography variant='h6'>
          Master Your Finances with Our EMI Calculator App
        </Typography>

        {/* input */}
        <Input />

        {/* schedule */}
        <RepaymentSchedule />

        {/* general text */}
        <Typography variant='p' component='p'>
          Experience hassle-free financial planning with our EMI calculator app
          equipped with GST interest calculations. Whether you're exploring home
          loans, personal loans, or any other financial commitment, our
          user-friendly tool ensures accurate and transparent results. Estimate
          your Equated Monthly Installments effortlessly, factoring in Goods and
          Services Tax for a comprehensive understanding of your repayment
          obligations. Make informed financial decisions today with our EMI
          calculator app, designed to empower your financial journey.
        </Typography>
      </Box>
    </CCEMiContext.Provider>
  );
};

export default CCEmiMain;

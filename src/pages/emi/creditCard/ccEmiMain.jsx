// library
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
// local
import Input from './input';
import { CCEMiContext } from '../../../context';
import { calculateEMI } from '../../../utils/emiUtils';
import { useState } from 'react';
import RepaymentSchedule from './repaymentSchedule';
import Chart from './chart';

const CCEmiMain = () => {
  const [emiInfo, setEmiInfo] = useState();
  const [repaymentSchedule, setRepaymentSchedule] = useState([]);

  const onCalculateEMI = (loanAmount, roi, tenure) => {
    const calc = calculateEMI(loanAmount, roi, tenure, 18);
    setRepaymentSchedule(calc.schedule);
    setEmiInfo(calc.info);
  };

  return (
    <CCEMiContext.Provider
      value={{ onCalculateEMI, repaymentSchedule, emiInfo }}
    >
      <Box display='flex' gap={2} flexDirection='column'>
        {/* page heading */}
        <Typography variant='h6'>
          Master Your Finances with Our EMI Calculator App
        </Typography>

        {/* input - graph */}
        <Grid container boxShadow={1} p={2}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Input />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Chart />
          </Grid>
        </Grid>

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

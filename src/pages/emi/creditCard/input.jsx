// library
import { useTheme } from '@emotion/react';
import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';

// project
import { addCommasToNumber } from '../../../utils/stringUtils';
import { CCEMiContext } from '../../../context';

function Input() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [roi, setRoi] = useState(15);
  const [tenure, setTenure] = useState(24);

  // error
  const [loanAmountErr, setLoanAmountErr] = useState(false);
  const [roiErr, setRoiErr] = useState(false);
  const [tenureErr, setTenureErr] = useState(false);

  // context
  const { onCalculateEMI } = useContext(CCEMiContext);

  const theme = useTheme();

  const onLoanAmountChanged = (props) => {
    let value = props.target.value.replaceAll(',', '');
    value = value.replace(/[^0-9]/g, '');
    setLoanAmount(value);
    setLoanAmountErr(false);
  };

  const onRoiChanged = (props) => {
    const value = props.target.value.replace(/[^\d.]/g, '');
    if (/^\d*\.?\d*$/.test(value)) {
      setRoi(value);
      setRoiErr(false);
    }
  };

  const onTenureChanged = (props) => {
    const value = props.target.value.replace(/[^0-9]/g, '');
    setTenure(value);
    setTenureErr(false);
  };

  const onCalculate = () => {
    const formattedRoi = parseFloat(roi);
    const formattedLoanAmount = parseInt(loanAmount);
    const formattedTenure = parseInt(tenure);

    // validate loan amount
    if (
      isNaN(formattedLoanAmount) ||
      formattedLoanAmount < 1000 ||
      formattedLoanAmount > 1000000000 // 100 crores
    ) {
      return setLoanAmountErr(true);
    }

    // validate roi
    if (isNaN(formattedRoi) || formattedRoi < 1 || formattedRoi > 30) {
      return setRoiErr(true);
    }

    // validate tenure
    if (
      isNaN(formattedTenure) ||
      formattedTenure < 1 ||
      formattedTenure > 360
    ) {
      return setTenureErr(true);
    }

    setRoi(formattedRoi);

    onCalculateEMI(loanAmount, formattedRoi, tenure);
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
      p={2}
      width='50%'
      bgcolor={theme.palette.primary.cardBg}
    >
      <TextField
        label='Loan amount'
        variant='filled'
        sx={{
          bgcolor: 'white',
        }}
        value={addCommasToNumber(loanAmount)}
        placeholder='10,000'
        onChange={onLoanAmountChanged}
        error={loanAmountErr}
        helperText={
          loanAmountErr
            ? 'The loan amount should be between 1,000 and 1,00,00,00,000.'
            : undefined
        }
      />
      <TextField
        label='Annual rate of interest (%)'
        variant='filled'
        sx={{
          bgcolor: 'white',
        }}
        value={roi}
        placeholder='16%'
        onChange={onRoiChanged}
        error={roiErr}
        helperText={
          roiErr
            ? 'The annual rate of interest should be between 1% and 30%.'
            : undefined
        }
      />
      <TextField
        label='Tenure (months)'
        variant='filled'
        sx={{
          bgcolor: 'white',
        }}
        value={tenure}
        placeholder='24'
        onChange={onTenureChanged}
        error={tenureErr}
        helperText={
          tenureErr
            ? 'The tenure should be between 1 and 360 months.'
            : undefined
        }
      />
      {/* action button */}
      <Button variant='contained' color='success' onClick={onCalculate}>
        Calculate
      </Button>
    </Box>
  );
}

export default Input;

// library
import { useTheme } from '@emotion/react';
import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';

// project
import { addCommasToNumber } from '../../../utils/stringUtils';
import { CCEMiContext } from '../../../context';
import { calculateEMI } from '../../../utils/emiUtils';

function Input() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [roi, setRoi] = useState(15);
  const [tenure, setTenure] = useState(24);

  // context
  const { onCalculateEMI } = useContext(CCEMiContext);

  const theme = useTheme();

  const onLoanAmountChanged = (props) => {
    let value = props.target.value.replaceAll(',', '');
    value = value.replace(/[^0-9]/g, '');
    setLoanAmount(value);
  };

  const onRoiChanged = (props) => {
    const value = props.target.value.replace(/[^\d.]/g, '');
    if (/^\d*\.?\d*$/.test(value)) {
      setRoi(value);
    }
  };

  const onTenureChanged = (props) => {
    const value = props.target.value.replace(/[^0-9]/g, '');
    setTenure(value);
  };

  const onCalculate = () => {
    const formattedRoi = parseFloat(roi);
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
      />
      <TextField
        label='Rate of interest (%)'
        variant='filled'
        sx={{
          bgcolor: 'white',
        }}
        value={roi}
        placeholder='16%'
        onChange={onRoiChanged}
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
      />
      {/* action button */}
      <Button variant='contained' color='success' onClick={onCalculate}>
        Calculate
      </Button>
      <Button variant='outlined' color='secondary'>
        Reset
      </Button>
    </Box>
  );
}

export default Input;

// library
import React, { useContext } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';

// project
import { CCEMiContext } from '../../../context';
import { addCommasToNumber } from '../../../utils/stringUtils';

const Label = ({ title, color }) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='center'
      gap={1}
    >
      <Box bgcolor={color} height={18} width={18} borderRadius='25%' />
      <Typography textTransform='capitalize'>{title}</Typography>
    </Box>
  );
};

// {
//   "principal": "10000.00",
//   "totalInterest": "187.89",
//   "totalGstOnInterest": "33.82",
//   "totalPaid": "10221.71"
// }
function Chart() {
  const { emiInfo } = useContext(CCEMiContext);

  if (!emiInfo) {
    return;
  }

  const data = [
    {
      title: 'Principal',
      value: parseInt(emiInfo.principal),
      color: '#F43EE5',
    },
    {
      title: 'Total interest',
      value: parseInt(emiInfo.totalInterest),
      color: '#97D8B2',
    },
    {
      title: 'Gst on interest',
      value: parseInt(emiInfo.totalGstOnInterest),
      color: '#EDABED',
    },
  ];

  return (
    <Box display='flex' flexDirection='column' gap={1}>
      <PieChart
        style={{
          height: '240px',
          padding: '8px',
        }}
        animate
        data={data}
        label={(props) => (
          <Typography fontSize='12px' color='white'>
            10
          </Typography>
        )}
      />

      {/* detailed info */}
      <Box
        width='100%'
        alignItems='center'
        justifyContent='center'
        display='flex'
        flexDirection='column'
      >
        {/* total */}
        <Typography variant='h6' fontWeight='700'>
          Total: {addCommasToNumber(emiInfo.totalPaid)}
        </Typography>
        {/* principal */}
        <Typography variant='subtitle1' fontWeight='600'>
          Extra:{' '}
          {addCommasToNumber(
            (
              parseFloat(emiInfo.totalPaid) - parseFloat(emiInfo.principal)
            ).toFixed(2)
          )}
        </Typography>
        {/* interest - Gst on interest */}
        <Box display='flex' gap={2} justifyContent='center'>
          <Typography variant='subtitle2' fontWeight='500'>
            Interest: {addCommasToNumber(emiInfo.totalInterest)}
          </Typography>
          <Typography variant='subtitle2' fontWeight='500'>
            GST on interest: {addCommasToNumber(emiInfo.totalGstOnInterest)}
          </Typography>
        </Box>
      </Box>

      {/* labels */}
      <Grid container gap={2} display='flex' justifyContent='center'>
        {data.map((item, index) => (
          <Grid item key={index}>
            <Label title={item.title} color={item.color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Chart;

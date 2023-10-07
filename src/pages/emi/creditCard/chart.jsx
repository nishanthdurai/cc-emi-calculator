// library
import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';
import { CCEMiContext } from '../../../context';

const CustomLabel = ({ title, percentage }) => {
  return <Typography>{title}</Typography>;
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

  console.log(emiInfo);

  return (
    <Box>
      <PieChart
        style={{
          height: '285px',
          padding: '16px',
        }}
        animate
        data={[
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
        ]}
        // label={(props) => `${props.dataEntry.title}`}
      />
    </Box>
  );
}

export default Chart;

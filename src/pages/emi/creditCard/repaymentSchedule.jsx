// library
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  Box,
  Button,
} from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { utils, write } from 'xlsx';

// project
import { CCEMiContext } from '../../../context';
import { addCommasToNumber } from '../../../utils/stringUtils';

function RepaymentSchedule() {
  const { repaymentSchedule } = useContext(CCEMiContext);

  if (repaymentSchedule.length === 0) {
    return;
  }

  const onClickSave = () => {
    const ws = utils.json_to_sheet(repaymentSchedule, {
      cellStyles: true, // Enable cell styling
      z: '$#,##0.00', // Format the "Amount" column as currency
    });
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelFile = write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });

    // Convert the array buffer to a Blob
    const blob = new Blob([excelFile], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'emi-schedule.xlsx';
    a.click();
  };

  return (
    <TableContainer component={Paper} sx={{ p: 1 }}>
      {/* save file */}
      <Box display='flex' flexDirection='row' justifyContent='right'>
        <Button variant='contained' color='success' onClick={onClickSave}>
          Save
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            {[
              'Installment',
              'Principal',
              'Principal (remaining)',
              'Interest',
              'GST (interest)',
              'EMI (without GST on interest)',
              'EMI',
            ].map((title, index) => (
              <TableCell key={index} align='center'>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {repaymentSchedule.map((schedule) => (
            <TableRow
              key={schedule.month}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {[
                schedule.month,
                schedule.principalPayment,
                schedule.remainingPrincipal,
                schedule.interestPayment,
                schedule.gstForInterest,
                schedule.emi,
                schedule.emiWithGst,
              ].map((data, index) => (
                <TableCell align='center' key={index}>
                  {addCommasToNumber(data)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RepaymentSchedule;

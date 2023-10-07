// library
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
  Paper,
} from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { CCEMiContext } from '../../../context';

function RepaymentSchedule() {
  const { repaymentSchedule } = useContext(CCEMiContext);

  if (repaymentSchedule.length === 0) {
    return;
  }

  return (
    <TableContainer component={Paper}>
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
                  {data}
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

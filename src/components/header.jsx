// library
import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h5'
          component='div'
          sx={{
            cursor: 'pointer',
            ':hover': {
              color: theme.palette.primary.light,
            },
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          simplycalculate.in
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

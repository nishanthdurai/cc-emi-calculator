import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';

const Test = () => {
  const theme = useTheme();

  return <Typography color='common.neutral'>Hello world</Typography>;
};

export default Test;

import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { StyledH1ResponsiveTitle } from 'style/style';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';

const NotFound: FC = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ height: '85vh' }}
    >
      <StyledH1ResponsiveTitle>404 - Page Not Found</StyledH1ResponsiveTitle>
      <JumpButton title='Вернуться на главную' path='/' />
    </Grid>
  );
};

export default NotFound;

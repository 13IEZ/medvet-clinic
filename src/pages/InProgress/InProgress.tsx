import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { StyledH1ResponsiveTitle } from 'style/style';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';
import work_ic from 'assets/images/work-ic.png';

const InProgress: FC = () => {
  return (
    <section style={{ height: '85vh' }}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        gap={2}
        sx={{ height: '100%' }}
      >
        <img src={work_ic} alt='In progress icon' />
        <StyledH1ResponsiveTitle>Страница находится в разработке ...</StyledH1ResponsiveTitle>
        <JumpButton title='Вернуться на главную' path='/' />
      </Grid>
    </section>
  );
};

export default InProgress;

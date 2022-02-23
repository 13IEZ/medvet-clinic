import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { StyledSubTitle } from 'style/style';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';
import work_ic from 'assets/images/work-ic.png';

const InProgress: FC = () => {
  return (
    <section style={{ height: '60vh' }}>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        gap={2}
        sx={{ height: '100%' }}
      >
        <img src={work_ic} alt='In progress icon' />
        <StyledSubTitle>Страница находится в разработке ...</StyledSubTitle>
        <JumpButton title='Вернуться на главную' path='/' />
      </Grid>
    </section>
  );
};

export default InProgress;

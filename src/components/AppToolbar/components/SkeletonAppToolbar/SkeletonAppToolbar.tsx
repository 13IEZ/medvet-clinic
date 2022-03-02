import React, { FC } from 'react';
import { Grid, Skeleton } from '@mui/material';
import { StyledContainer } from 'style/style';

const SkeletonAppToolbar: FC = () => {
  return (
    <StyledContainer maxWidth={false} width='110rem'>
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        wrap='nowrap'
      >
        <Skeleton variant='rectangular' height={'6rem'} width={'6rem'} />
        <Skeleton variant='text' height={'3rem'} width={'10%'} />
        <Skeleton variant='text' height={'3rem'} width={'10%'} />
        <Skeleton variant='text' height={'3rem'} width={'10%'} />
        <Skeleton variant='text' height={'3rem'} width={'10%'} />
        <Skeleton variant='text' height={'3rem'} width={'10%'} />
      </Grid>
    </StyledContainer>
  );
};

export default SkeletonAppToolbar;

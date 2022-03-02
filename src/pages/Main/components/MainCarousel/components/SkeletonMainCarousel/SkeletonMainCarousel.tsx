import React, { FC } from 'react';
import { Skeleton, Grid } from '@mui/material';

const SkeletonMainCarousel: FC = () => {
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      wrap='nowrap'
      justifyContent='center'
      sx={{ margin: '5rem 0' }}
    >
      <Grid item xs={6} sx={{ height: '100%' }} alignItems='center'>
        <Grid
          container
          direction='column'
          alignItems='center'
          wrap='nowrap'
          justifyContent='center'
        >
          <Skeleton variant='text' width='30%' height='3rem' />
          <Skeleton variant='text' width='40%' height='3rem' />
          <Skeleton variant='text' width='20%' height='4rem' />
        </Grid>
      </Grid>
      <Grid item xs={6} sx={{ height: '100%' }}>
        <Skeleton variant='rectangular' sx={{ borderRadius: '3rem' }} height='15rem' width='80%' />
      </Grid>
    </Grid>
  );
};

export default SkeletonMainCarousel;

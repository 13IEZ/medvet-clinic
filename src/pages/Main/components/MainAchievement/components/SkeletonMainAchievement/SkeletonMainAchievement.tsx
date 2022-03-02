import React from 'react';
import { Grid, Skeleton } from '@mui/material';

const SkeletonMainAchievement = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
      alignItems='center'
      sx={{ margin: 'auto 0', height: '100%' }}
    >
      <Grid item sx={{ width: '56%', position: 'relative' }}>
        <Skeleton variant='text' height={200} width='100%' />
        <Skeleton variant='text' height={100} width='100%' />
        <Skeleton variant='text' height={100} width='60%' />
      </Grid>
    </Grid>
  );
};

export default SkeletonMainAchievement;

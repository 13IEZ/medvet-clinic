import React from 'react';
import { Grid, Skeleton } from '@mui/material';

const SkeletonMainService = () => {
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      justifyContent='space-around'
      gap={2}
      wrap={'nowrap'}
    >
      <Grid item sx={{ height: '5rem', width: '100%' }}>
        <Skeleton
          variant='rectangular'
          width='100%'
          height='100%'
          sx={{ borderRadius: '1.25rem' }}
        />
      </Grid>
      <Grid item sx={{ height: '5rem', width: '100%' }}>
        <Skeleton
          variant='rectangular'
          width='100%'
          height='100%'
          sx={{ borderRadius: '1.25rem' }}
        />
      </Grid>
      <Grid item sx={{ height: '5rem', width: '100%' }}>
        <Skeleton
          variant='rectangular'
          width='100%'
          height='100%'
          sx={{ borderRadius: '1.25rem' }}
        />
      </Grid>
    </Grid>
  );
};

export default SkeletonMainService;

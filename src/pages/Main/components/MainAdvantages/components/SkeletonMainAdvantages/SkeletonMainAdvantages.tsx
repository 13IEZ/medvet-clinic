import React from 'react';
import { Grid, Skeleton } from '@mui/material';

const SkeletonMainAdvantages = () => {
  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ marginTop: '3rem', paddingTop: '5rem' }}
    >
      <Grid item sx={{ width: '100%', marginBottom: '3rem' }}>
        <Skeleton variant='text' width='50%' height='3rem' sx={{ margin: '0 auto' }} />
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Grid
          container
          direction='row'
          wrap='nowrap'
          alignItems='center'
          justifyContent='space-between'
          gap={2}
        >
          <Grid item sx={{ width: '90%' }}>
            <Skeleton
              variant='rectangular'
              width='100%'
              height='6rem'
              sx={{ borderRadius: '1.25rem' }}
            />
          </Grid>
          <Grid item sx={{ width: '90%' }}>
            <Skeleton
              variant='rectangular'
              width='100%'
              height='6rem'
              sx={{ borderRadius: '1.25rem' }}
            />
          </Grid>
          <Grid item sx={{ width: '90%' }}>
            <Skeleton
              variant='rectangular'
              width='100%'
              height='6rem'
              sx={{ borderRadius: '1.25rem' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SkeletonMainAdvantages;

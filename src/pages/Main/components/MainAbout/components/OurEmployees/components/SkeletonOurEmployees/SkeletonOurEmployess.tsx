import React from 'react';
import { Skeleton, Box } from '@mui/material';

const SkeletonOurEmployees = () => {
  return (
    <Box sx={{ marginTop: '6.25rem', paddingBottom: '3rem' }}>
      <Skeleton variant='text' width='40%' height={60} sx={{ margin: '0 auto' }} />
      <Skeleton
        variant='rectangular'
        width='100%'
        height={200}
        sx={{ margin: '0 auto', borderRadius: '1.25rem' }}
      />
      <Skeleton variant='text' width='25%' height={40} sx={{ margin: '0 auto' }} />
    </Box>
  );
};

export default SkeletonOurEmployees;

import React from 'react';
import { Skeleton } from '@mui/material';
import { HistoryDiv } from 'pages/Main/components/MainAbout/components/CompanyHistory/CompanyHistory.style';

const SkeletonCompanyHistory = () => {
  return (
    <HistoryDiv>
      <Skeleton variant='text' width='60%' height={60} sx={{ margin: '0 auto' }} />
      <Skeleton variant='text' width='70%' height={160} sx={{ margin: '0 auto' }} />
      <Skeleton variant='text' width='25%' height={40} sx={{ margin: '0 auto' }} />
    </HistoryDiv>
  );
};

export default SkeletonCompanyHistory;

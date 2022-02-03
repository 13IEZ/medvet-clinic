import React, { FC } from 'react';
import { mainHistoryApi } from 'store/services/Main/MainHistoryService/MainHistoryService';
import { StyledSectionTitle } from 'style/style';
import {
  StyledHistoryText,
  HistoryDiv,
} from 'pages/Main/components/MainAbout/components/CompanyHistory/CompanyHistory.style';
import { Skeleton, Grid } from '@mui/material';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';

const CompanyHistory: FC = () => {
  const { data: historyData, error: fetchError } = mainHistoryApi.useFetchHistoryDataQuery('');

  return historyData ? (
    <>
      <HistoryDiv>
        <StyledSectionTitle variant='h2' sx={{ textAlign: 'center' }}>
          {historyData.title}
        </StyledSectionTitle>
      </HistoryDiv>
      <StyledHistoryText paragraph>{historyData.text}</StyledHistoryText>
      <Grid container justifyContent='center'>
        <JumpButton title='Читать далее' path='about' />
      </Grid>
    </>
  ) : (
    <HistoryDiv>
      <Skeleton variant='text' width='40%' height={60} sx={{ margin: '0 auto' }} />
      <Skeleton variant='text' width='50%' height={160} sx={{ margin: '0 auto' }} />
      <Skeleton variant='text' width='10%' height={40} sx={{ margin: '0 auto' }} />
    </HistoryDiv>
  );
};

export default CompanyHistory;

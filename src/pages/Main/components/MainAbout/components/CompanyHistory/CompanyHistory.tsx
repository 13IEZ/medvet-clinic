import React, { FC } from 'react';
import { mainHistoryApi } from 'store/services/Main/MainHistoryService/MainHistoryService';
import { StyledSectionTitle } from 'style/style';
import {
  StyledHistoryText,
  HistoryDiv,
} from 'pages/Main/components/MainAbout/components/CompanyHistory/CompanyHistory.style';
import { Grid } from '@mui/material';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';
import SkeletonCompanyHistory from 'pages/Main/components/MainAbout/components/CompanyHistory/components/SkeletonCompanyHistory/SkeletonCompanyHistory';

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
    <SkeletonCompanyHistory />
  );
};

export default CompanyHistory;

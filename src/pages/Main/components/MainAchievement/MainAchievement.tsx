import React, { FC } from 'react';
import { mainAchievementApi } from 'store/services/Main/MainAchievementService/MainAchievementService';
import {
  StyledAchievementTitle,
  StyledAchievementSubTitle,
  StyledImg,
  StyledAchievementSection,
} from 'pages/Main/components/MainAchievement/MainAchievement.style';
import { Grid, Skeleton } from '@mui/material';
import { StyledContainer } from 'style/style';

const MainAchievement: FC = () => {
  const { data: achievementData, error: fetchError } =
    mainAchievementApi.useFetchAchievementDataQuery('');

  return (
    <StyledAchievementSection>
      <StyledContainer maxWidth={false} width='84.5rem' sx={{ height: '100%' }}>
        {achievementData ? (
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ height: '100%', margin: '5rem 0' }}
          >
            <Grid item sx={{ width: '56%', position: 'relative', padding: '4rem 0' }}>
              <StyledAchievementTitle>{achievementData.title}</StyledAchievementTitle>
              <StyledAchievementSubTitle>{achievementData.subtitle}</StyledAchievementSubTitle>
              <StyledImg src={achievementData.img} alt='achievement image' />
            </Grid>
          </Grid>
        ) : (
          <Grid container direction='column' justifyContent='center' alignItems='center'>
            <Grid item sx={{ width: '56%', position: 'relative' }}>
              <Skeleton variant='text' height={200} width='100%' />
              <Skeleton variant='text' height={100} width='100%' />
              <Skeleton variant='text' height={100} width='60%' />
            </Grid>
          </Grid>
        )}
      </StyledContainer>
    </StyledAchievementSection>
  );
};

export default MainAchievement;

import React, { FC } from 'react';
import { mainAchievementApi } from 'store/services/Main/MainAchievementService/MainAchievementService';
import {
  StyledAchievementTitle,
  StyledAchievementSubTitle,
  StyledAchievementSection,
  StyledImg,
} from 'pages/Main/components/MainAchievement/MainAchievement.style';
import { Grid } from '@mui/material';
import { StyledContainer } from 'style/style';
import SkeletonMainAchievement from 'pages/Main/components/MainAchievement/components/SkeletonMainAchievement/SkeletonMainAchievement';

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
            sx={{ height: '100%' }}
          >
            <Grid item sx={{ position: 'relative', padding: '4rem 0' }}>
              <StyledAchievementTitle>
                {achievementData.title}{' '}
                <StyledImg src={achievementData.img} alt='achievement image' />
              </StyledAchievementTitle>
              <StyledAchievementSubTitle>{achievementData.subtitle}</StyledAchievementSubTitle>
            </Grid>
          </Grid>
        ) : (
          <SkeletonMainAchievement />
        )}
      </StyledContainer>
    </StyledAchievementSection>
  );
};

export default MainAchievement;

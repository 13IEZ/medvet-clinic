import React, { FC } from 'react';
import { mainAchievementApi } from 'store/services/Main/MainAchievementService/MainAchievementService';
import {
  StyledAchievementTitle,
  StyledAchievementSubTitle,
  StyledImg,
} from 'pages/Main/components/MainAchievement/MainAchievement.style';
import { Grid, Skeleton } from '@mui/material';

const MainAchievement: FC = () => {
  const { data: achievementData, error: fetchError } =
    mainAchievementApi.useFetchAchievementDataQuery('');

  return (
    <section style={{ height: '80vh' }}>
      {achievementData ? (
        <Grid container direction='column' justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '39%', position: 'relative', padding: '4rem 0' }}>
            <StyledAchievementTitle>{achievementData.title}</StyledAchievementTitle>
            <StyledAchievementSubTitle>{achievementData.subtitle}</StyledAchievementSubTitle>
            <StyledImg src={achievementData.img} alt='achievement image' />
          </Grid>
        </Grid>
      ) : (
        <Grid container direction='column' justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '39%', position: 'relative', padding: '4rem 0' }}>
            <Skeleton variant='text' height={200} width='100%' />
            <Skeleton variant='text' height={100} width='100%' />
            <Skeleton variant='text' height={100} width='60%' />
          </Grid>
        </Grid>
      )}
    </section>
  );
};

export default MainAchievement;

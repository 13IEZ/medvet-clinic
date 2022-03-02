import React, { FC } from 'react';
import { StyledSectionTitle } from 'style/style';
import { Box, Grid } from '@mui/material';
import MainEmployeesCarousel from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/MainEmployeesCarousel';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';
import { employeesCarouselApi } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService';
import SkeletonOurEmployees from 'pages/Main/components/MainAbout/components/OurEmployees/components/SkeletonOurEmployees/SkeletonOurEmployess';

const OurEmployees: FC = () => {
  const { data: employeesCarouselData, error: fetchError } =
    employeesCarouselApi.useFetchEmployeesCarouselQuery('');

  return employeesCarouselData ? (
    <>
      <Box sx={{ marginTop: '6.25rem' }}>
        <StyledSectionTitle variant='h2' sx={{ textAlign: 'center' }}>
          Наши специалисты
        </StyledSectionTitle>
      </Box>
      <Box sx={{ margin: '1rem 0' }}>
        <MainEmployeesCarousel employeesCarouselData={employeesCarouselData} />
      </Box>
      <Grid container justifyContent='center' sx={{ padding: '1rem 0 2rem' }}>
        <JumpButton title='Посмотреть всех' path='employees' />
      </Grid>
    </>
  ) : (
    <SkeletonOurEmployees />
  );
};

export default OurEmployees;

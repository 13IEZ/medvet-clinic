import React, { FC } from 'react';
import { StyledSectionTitle } from 'style/style';
import { Box, Grid, Skeleton } from '@mui/material';
import MainEmployeesCarousel from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/MainEmployeesCarousel';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';
import { employeesCarouselApi } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService';

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
      <Grid container justifyContent='center' sx={{ padding: '1rem 0 6rem' }}>
        <JumpButton title='Посмотреть всех' path='employees' />
      </Grid>
    </>
  ) : (
    <>
      <Box sx={{ marginTop: '6.25rem', paddingBottom: '3rem' }}>
        <Skeleton variant='text' width='40%' height={60} sx={{ margin: '0 auto' }} />
        <Skeleton
          variant='rectangular'
          width='100%'
          height={200}
          sx={{ margin: '0 auto', borderRadius: '1.25rem' }}
        />
        <Skeleton variant='text' width='10%' height={40} sx={{ margin: '0 auto' }} />
      </Box>
    </>
  );
};

export default OurEmployees;

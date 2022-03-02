import React, { FC } from 'react';
import { listOfServicesApi } from 'store/services/Main/ListOfServices/ListOfServices';
import MainServicesItem from 'pages/Main/components/MainServices/components/MainServicesItem/MainServicesItem';
import { Grid } from '@mui/material';
import { StyledContainer } from 'style/style';
import SkeletonMainService from 'pages/Main/components/MainServices/components/SkeletonMainService/SkeletonMainService';

const MainServices: FC = () => {
  const { data: listOfService, error: fetchError } =
    listOfServicesApi.useFetchListOfServicesQuery('');

  return (
    <section>
      <StyledContainer maxWidth={false} width='84.5rem'>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ margin: '5rem 0' }}
          columnSpacing={1}
          rowSpacing={3}
        >
          {listOfService
            ? listOfService.map(elem => <MainServicesItem key={elem.id} item={elem} />)
            : !listOfService && <SkeletonMainService />}
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default MainServices;

import React, { FC } from 'react';
import { listOfServicesApi } from 'store/services/ListOfServices/ListOfServices';
import MainServicesItem from 'pages/Main/components/MainServices/components/MainServicesItem/MainServicesItem';
import { Grid, Skeleton } from '@mui/material';

const MainServices: FC = () => {
  const { data: listOfService, error: fetchError } =
    listOfServicesApi.useFetchListOfServicesQuery('');

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      columns={{ xs: 4, sm: 9, md: 12 }}
      sx={{ margin: '6rem 0' }}
    >
      {listOfService
        ? listOfService.map(elem => <MainServicesItem key={elem.id} item={elem} />)
        : !listOfService &&
          !fetchError && (
            <>
              <Grid item xs={4} sm={3} md={3} sx={{ height: '13.75rem', maxWidth: '20rem' }}>
                <Skeleton
                  variant='rectangular'
                  width='90%'
                  height='90%'
                  sx={{ margin: '1rem', borderRadius: '1.25rem' }}
                />
              </Grid>
              <Grid item xs={4} sm={3} md={3} sx={{ height: '13.75rem', maxWidth: '20rem' }}>
                <Skeleton
                  variant='rectangular'
                  width='90%'
                  height='90%'
                  sx={{ margin: '1rem', borderRadius: '1.25rem' }}
                />
              </Grid>
              <Grid item xs={4} sm={3} md={3} sx={{ height: '13.75rem', maxWidth: '20rem' }}>
                <Skeleton
                  variant='rectangular'
                  width='90%'
                  height='90%'
                  sx={{ margin: '1rem', borderRadius: '1.25rem' }}
                />
              </Grid>
              <Grid item xs={4} sm={3} md={3} sx={{ height: '13.75rem', maxWidth: '20rem' }}>
                <Skeleton
                  variant='rectangular'
                  width='90%'
                  height='90%'
                  sx={{ margin: '1rem', borderRadius: '1.25rem' }}
                />
              </Grid>
            </>
          )}
    </Grid>
  );
};

export default MainServices;

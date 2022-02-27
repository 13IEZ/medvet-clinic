import React, { FC } from 'react';
import { StyledSectionTitle, StyledContainer } from 'style/style';
import { mainAdvantagesApi } from 'store/services/Main/MainAdvantagesService/MainAdvantagesService';
import MainAdvantagesItem from 'pages/Main/components/MainAdvantages/components/MainAdvantagesItem/MainAdvantagesItem';
import { Grid, Skeleton } from '@mui/material';

const MainAdvantages: FC = () => {
  const { data: mainAdvantagesData, error: fetchError } =
    mainAdvantagesApi.useFetchMainAdvantagesQuery('');

  return (
    <section>
      <StyledContainer maxWidth={false} width='104rem'>
        {mainAdvantagesData ? (
          <StyledSectionTitle sx={{ textAlign: 'center', padding: '7rem 0 4rem' }}>
            Почему хозяева выбирают нас?
          </StyledSectionTitle>
        ) : (
          !mainAdvantagesData &&
          !fetchError && (
            <Skeleton variant='text' width='50%' height={80} sx={{ margin: '5rem auto 4rem' }} />
          )
        )}

        <Grid
          container
          justifyContent='space-between'
          alignItems='flex-start'
          rowSpacing={10}
          columns={{ xs: 4, sm: 10, md: 12 }}
        >
          {mainAdvantagesData
            ? mainAdvantagesData.map(elem => <MainAdvantagesItem key={elem.id} item={elem} />)
            : !mainAdvantagesData &&
              !fetchError && (
                <>
                  <Grid item xs={4} sm={5} md={4}>
                    <Skeleton
                      variant='rectangular'
                      width='100%'
                      height={200}
                      sx={{ borderRadius: '2rem' }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={5} md={4}>
                    <Skeleton
                      variant='rectangular'
                      width='100%'
                      height={200}
                      sx={{ borderRadius: '2rem' }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={5} md={4}>
                    <Skeleton
                      variant='rectangular'
                      width='100%'
                      height={200}
                      sx={{ borderRadius: '2rem' }}
                    />
                  </Grid>
                </>
              )}
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default MainAdvantages;

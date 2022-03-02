import React, { FC } from 'react';
import { StyledSectionTitle, StyledContainer } from 'style/style';
import { mainAdvantagesApi } from 'store/services/Main/MainAdvantagesService/MainAdvantagesService';
import MainAdvantagesItem from 'pages/Main/components/MainAdvantages/components/MainAdvantagesItem/MainAdvantagesItem';
import { Grid } from '@mui/material';
import SkeletonMainAdvantages from 'pages/Main/components/MainAdvantages/components/SkeletonMainAdvantages/SkeletonMainAdvantages';

const MainAdvantages: FC = () => {
  const { data: mainAdvantagesData, error: fetchError } =
    mainAdvantagesApi.useFetchMainAdvantagesQuery('');

  return (
    <section>
      <StyledContainer maxWidth={false} width='104rem'>
        {mainAdvantagesData && (
          <StyledSectionTitle sx={{ textAlign: 'center', padding: '7rem 0 4rem' }}>
            Почему хозяева выбирают нас?
          </StyledSectionTitle>
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
            : !mainAdvantagesData && <SkeletonMainAdvantages />}
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default MainAdvantages;

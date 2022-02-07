import React, { FC } from 'react';
import MainContactsMap from 'pages/Main/components/MainContacts/components/MainContactsMap/MainContactsMap';
import { StyledContainer, StyledSectionTitle } from 'style/style';
import MainContactsInfo from 'pages/Main/components/MainContacts/components/MainContactsInfo/MainContactsInfo';
import { Grid } from '@mui/material';

const MainContacts: FC = () => {
  return (
    <section>
      <StyledContainer maxWidth={false} width='91.25rem' sx={{ marginBottom: '10rem' }}>
        <StyledSectionTitle sx={{ margin: '10rem 0 5rem' }}>Контакты</StyledSectionTitle>
        <Grid container justifyContent='space-between' alignItems='center' wrap='nowrap'>
          <MainContactsInfo />
          <MainContactsMap />
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default MainContacts;

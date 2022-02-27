import React, { FC } from 'react';
import MainContactsMap from 'pages/Main/components/MainContacts/components/MainContactsMap/MainContactsMap';
import { StyledContainer, StyledSectionTitle } from 'style/style';
import MainContactsInfo from 'pages/Main/components/MainContacts/components/MainContactsInfo/MainContactsInfo';
import { StyledContactsHolder } from 'pages/Main/components/MainContacts/MainContacts.style';

const MainContacts: FC = () => {
  return (
    <section>
      <StyledContainer maxWidth={false} width='91.25rem' sx={{ marginBottom: '10rem' }}>
        <StyledSectionTitle sx={{ margin: '10rem 0 5rem', textAlign: 'center' }}>
          Контакты
        </StyledSectionTitle>
        <StyledContactsHolder container justifyContent='space-between' alignItems='center'>
          <MainContactsInfo />
          <MainContactsMap />
        </StyledContactsHolder>
      </StyledContainer>
    </section>
  );
};

export default MainContacts;

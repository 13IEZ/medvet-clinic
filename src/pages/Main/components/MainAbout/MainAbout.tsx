import React, { FC } from 'react';
import CompanyHistory from 'pages/Main/components/MainAbout/components/CompanyHistory/CompanyHistory';
import OurEmployees from 'pages/Main/components/MainAbout/components/OurEmployees/OurEmployees';
import { StyledContainer } from 'style/style';
import { MainAboutStyledSection } from 'pages/Main/components/MainAbout/MainAbout.style';

const MainAbout: FC = () => {
  return (
    <MainAboutStyledSection>
      <StyledContainer maxWidth={false} width='84.5rem'>
        <CompanyHistory />
        <OurEmployees />
      </StyledContainer>
    </MainAboutStyledSection>
  );
};

export default MainAbout;

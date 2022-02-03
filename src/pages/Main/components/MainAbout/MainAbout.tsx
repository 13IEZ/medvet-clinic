import React, { FC } from 'react';
import CompanyHistory from 'pages/Main/components/MainAbout/components/CompanyHistory/CompanyHistory';
import OurEmployees from 'pages/Main/components/MainAbout/components/OurEmployees/OurEmployees';
import { StyledContainer } from 'style/style';

const MainAbout: FC = () => {
  return (
    <section style={{ margin: '5rem 0', backgroundColor: '#FBF8F8' }}>
      <StyledContainer maxWidth={false} width='84.5rem'>
        <CompanyHistory />
        <OurEmployees />
      </StyledContainer>
    </section>
  );
};

export default MainAbout;

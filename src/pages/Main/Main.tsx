import React, { FC } from 'react';
import { StyledContainer } from '../../style';
import MainCarousel from 'pages/Main/components/MainCarousel/MainCarousel';
import MainServices from 'pages/Main/components/MainServices/MainServices';

const Main: FC = () => {
  return (
    <>
      <MainCarousel />
      <StyledContainer maxWidth={false} width='84.5rem'>
        <MainServices />
      </StyledContainer>
    </>
  );
};

export default Main;

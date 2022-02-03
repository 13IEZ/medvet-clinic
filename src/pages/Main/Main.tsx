import React, { FC } from 'react';
import MainCarousel from 'pages/Main/components/MainCarousel/MainCarousel';
import MainServices from 'pages/Main/components/MainServices/MainServices';
import MainAbout from 'pages/Main/components/MainAbout/MainAbout';
import MainAchievement from 'pages/Main/components/MainAchievement/MainAchievement';

const Main: FC = () => {
  return (
    <>
      <MainCarousel />
      <MainServices />
      <MainAbout />
      <MainAchievement />
    </>
  );
};

export default Main;

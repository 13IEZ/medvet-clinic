import React, { FC } from 'react';
import MainCarousel from 'pages/Main/components/MainCarousel/MainCarousel';
import MainServices from 'pages/Main/components/MainServices/MainServices';
import MainAbout from 'pages/Main/components/MainAbout/MainAbout';
import MainAchievement from 'pages/Main/components/MainAchievement/MainAchievement';
import MainAdvantages from 'pages/Main/components/MainAdvantages/MainAdvantages';
import ContactsSection from 'components/ContactsSection/ContactsSection';

const Main: FC = () => {
  return (
    <>
      <MainCarousel />
      <MainServices />
      <MainAbout />
      <MainAchievement />
      <MainAdvantages />
      <ContactsSection />
    </>
  );
};

export default Main;

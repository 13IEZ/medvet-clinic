import React, { FC } from 'react';
import Main from 'pages/Main/Main';
import InProgress from 'pages/InProgress/InProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from 'style/style';
import { Route, Routes } from 'react-router-dom';
import AppFooter from 'components/AppFooter/AppFooter';
import { Global } from '@emotion/react';
import AppToolbar from 'components/AppToolbar/AppToolbar';
import Notification from 'components/Notification/Notification';
import LiftButton from 'components/Buttons/LiftButton/LiftButton';
import Contacts from 'pages/Contacts/Contacts';
import Employees from 'pages/Employees/Employees';
import Employee from 'pages/Employee/Employee';
import NotFound from 'pages/NotFound/NotFound';
import Promotions from 'pages/Promotions/Promotions';
import Services from 'pages/Services/Services';

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      <AppToolbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='employees'>
          <Route index element={<Employees />} />
          <Route path=':id' element={<Employee />} />
        </Route>
        <Route path='blog' element={<InProgress />} />
        <Route path='about' element={<InProgress />} />
        <Route path='promotions' element={<Promotions />} />
        <Route path='services' element={<Services />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <AppFooter />
      <LiftButton />
      <Notification />
    </>
  );
};

export default App;

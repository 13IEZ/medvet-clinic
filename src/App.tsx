import React, { FC } from 'react';
import Main from 'pages/Main/Main';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from 'style/style';
import { Route, Routes } from 'react-router';
import AppFooter from 'components/AppFooter/AppFooter';
import { Global } from '@emotion/react';
import AppToolbar from 'components/AppToolbar/AppToolbar';

const App: FC = () => {
  return (
    <>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      <AppToolbar />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <AppFooter />
    </>
  );
};

export default App;

import React, { FC } from 'react';
import Main from 'pages/Main/Main';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from 'style';
import { Global } from '@emotion/react';

const App: FC = () => {
  return (
    <div className='App'>
      <CssBaseline />
      <Global styles={GlobalStyles} />
      <Main />
    </div>
  );
};

export default App;

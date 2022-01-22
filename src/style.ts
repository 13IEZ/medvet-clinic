import { css } from '@emotion/react';
import FuturaNewReg from 'assets/fonts/FuturaNewBook-Reg.ttf';
import FuturaNewBold from 'assets/fonts/FuturaNewBold-Reg.ttf';
import SchoolbookBold from 'assets/fonts/schoolbook-bold-cyrillic.ttf';
import SchoolbookCyr from 'assets/fonts/schoolbook-cyrillic.ttf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Futura New Regular';
    src: url(${FuturaNewReg}) format('truetype');
  }

  @font-face {
    font-family: 'Futura New Bold';
    src: url(${FuturaNewBold}) format('truetype');
  }

  @font-face {
    font-family: 'Schoolbook Cyrillic';
    src: url(${SchoolbookCyr}) format('truetype');
  }

  @font-face {
    font-family: 'Schoolbook Bold Cyrillic';
    src: url(${SchoolbookBold}) format('truetype');
  }

  * {
    font-size: 100%;
    color: #59443f;
    background: #fffefe;
  }
`;

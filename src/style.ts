import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import FuturaNewReg from 'assets/fonts/FuturaNewBook-Reg.ttf';
import FuturaNewBold from 'assets/fonts/FuturaNewBold-Reg.ttf';
import SchoolbookBold from 'assets/fonts/schoolbook-bold-cyrillic.ttf';
import SchoolbookCyr from 'assets/fonts/schoolbook-cyrillic.ttf';

interface IStyledContainer {
  width: string;
}

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

  body {
    font-size: 100%;
    color: #59443f;
    background: #fffefe;
  }
`;

export const StyledContainer = styled(Container)<IStyledContainer>`
  max-width: ${(props): string => props.width};
`;

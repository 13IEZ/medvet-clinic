import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';
import FuturaNewReg from 'assets/fonts/FuturaNewBook-Reg.ttf';
import FuturaNewBold from 'assets/fonts/FuturaNewBold-Reg.ttf';
import SchoolbookBold from 'assets/fonts/schoolbook-bold-cyrillic.ttf';
import SchoolbookCyr from 'assets/fonts/schoolbook-cyrillic.ttf';

interface IStyledContainer {
  width: string;
}

interface IStyledSubTitle {
  primary?: string;
}

interface IStyledText {
  color: string;
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
    height: 100%;
    font-size: 100%;
    color: #59443f;
    background: #fffefe;
  }
`;

export const StyledContainer = styled(Container)<IStyledContainer>`
  max-width: ${(props): string => props.width};
`;

export const StyledSectionTitle = styled(Typography)`
  font-family: 'Schoolbook Cyrillic', serif;
  color: #080606;
  font-size: 2.5rem;
  @media (max-width: 30rem) {
    font-size: 2rem;
  }
`;

export const StyledSubTitle = styled(Typography)<IStyledSubTitle>`
  font-family: 'Schoolbook Cyrillic', serif;
  color: ${(props): string => (props.primary ? '#59443f' : '#080606')};
  font-size: 1.875rem;
  line-height: 2.5rem;
  margin: 0;
  padding: 0;
  @media (max-width: 96.875rem) {
    font-size: 1.5rem;
  }
  @media (max-width: 64rem) {
    font-size: 1.3rem;
  }
`;

export const StyledText = styled(Typography)<IStyledText>`
  font-family: 'Futura New Regular', serif;
  color: ${(props): string => props.color};
  font-size: 1.25rem;
  line-height: 1.875rem;
  @media (max-width: 96.875rem) {
    font-size: 1rem;
  }
  @media (max-width: 48rem) {
    font-size: 0.9rem;
  }
`;

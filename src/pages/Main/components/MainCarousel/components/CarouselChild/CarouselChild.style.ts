import styled from '@emotion/styled';
import { Link, Grid } from '@mui/material';

export const MainTitle = styled.h1`
  font-family: 'Schoolbook Cyrillic', serif;
  font-size: 4.4rem;
  color: #080606;
  white-space: pre-wrap;
  margin: 0;
  @media (max-width: 96.875rem) {
    font-size: 3.2rem;
  }
  @media (max-width: 64rem) {
    font-size: 2.5rem;
  }
  @media (max-width: 48rem) {
    font-size: 1.5rem;
  }
  @media (max-width: 30rem) {
    font-size: 1.4rem;
  }
`;

export const StyledPhoneLink = styled(Link)`
  font-family: 'Futura New Bold', serif;
  font-size: 1.5rem;
  color: #59443f;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 48rem) {
    font-size: 100%;
    margin-right: 2rem;
  }
`;

export const StyleCarouselImg = styled.img`
  height: 50rem;

  @media (max-width: 96.875rem) {
    height: 36rem;
  }
  @media (max-width: 64rem) {
    height: 26rem;
  }
  @media (max-width: 38.75rem) {
    height: 18rem;
  }
  @media (max-width: 28.125rem) {
    height: 15rem;
  }
  @media (max-width: 23.75rem) {
    height: 13rem;
  }
`;

export const StyledContentHolder = styled(Grid)`
  height: 100%;
  gap: 15rem;
  @media (max-width: 96.875rem) {
    gap: 13rem;
  }
  @media (max-width: 64rem) {
    gap: 10rem;
  }
  @media (max-width: 48rem) {
    gap: 10rem;
  }
  @media (max-width: 38.75rem) {
    gap: 8rem;
  }
  @media (max-width: 28.125rem) {
    gap: 6rem;
  }
`;

export const StyledPhoneHolder = styled(Grid)`
  position: absolute;
  bottom: 10%;
  right: -15%;
  @media (max-width: 30rem) {
    right: 0;
  }
  @media (max-width: 23.75rem) {
    right: 5%;
  }
`;

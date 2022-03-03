import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledAchievementTitle = styled(Typography)`
  font-family: 'Schoolbook Bold Cyrillic', serif;
  font-size: 9rem;
  color: #59443f;
  text-align: center;
  @media (max-width: 96.875rem) {
    font-size: 6rem;
  }
  @media (max-width: 64rem) {
    font-size: 5rem;
  }
  @media (max-width: 48rem) {
    font-size: 3.5rem;
  }
`;

export const StyledAchievementSubTitle = styled(Typography)`
  font-family: 'Futura New Regular', serif;
  font-size: 5rem;
  color: #080606;
  @media (max-width: 96.875rem) {
    font-size: 4rem;
  }
  @media (max-width: 64rem) {
    font-size: 3.5rem;
  }
  @media (max-width: 48rem) {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const StyledAchievementSection = styled.section`
  height: 80vh;
  display: block;
`;

export const StyledImg = styled.img`
  height: auto;
  @media (max-width: 48rem) {
    height: 12rem;
  }
`;

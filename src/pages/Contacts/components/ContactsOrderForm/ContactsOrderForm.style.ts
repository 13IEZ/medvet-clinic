import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const StyledContactsImg = styled.img`
  height: 25rem;
  display: block;
  @media (max-width: 76.25rem) {
    height: 20rem;
  }
  @media (max-width: 64rem) {
    height: 15rem;
  }
`;

export const StyledContactsPicHolder = styled(Grid)`
  display: block;
  @media (max-width: 48rem) {
    display: none;
  }
`;

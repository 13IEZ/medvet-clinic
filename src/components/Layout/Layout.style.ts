import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const MarginedGrid = styled(Grid)`
  margin: 9.375rem 0;
  min-height: 50vh;
  @media (max-width: 96.875rem) {
    margin: 6rem 0;
  }
  @media (max-width: 76.25rem) {
    margin: 4rem 0;
  }
  @media (max-width: 48rem) {
    margin: 2rem 0;
    flex-direction: column;
    align-items: center;
  }
`;

import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const StyledContactsHolder = styled(Grid)`
  flex-wrap: nowrap;
  @media (max-width: 48rem) {
    flex-wrap: wrap;
  }
`;

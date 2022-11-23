import styled from '@emotion/styled';
import { Avatar } from '@mui/material';

export const StyledAvatar = styled(Avatar)`
  width: 20.625rem;
  height: 20.625rem;
  margin: 2rem 0;

  @media (max-width: 75rem) {
    width: 18rem;
    height: 18rem;
  }
  @media (max-width: 64rem) {
    width: 14rem;
    height: 14rem;
  }
  @media (max-width: 48rem) {
    width: 20.625rem;
    height: 20.625rem;
  }
  @media (max-width: 30rem) {
    width: 17rem;
    height: 17rem;
  }
`;

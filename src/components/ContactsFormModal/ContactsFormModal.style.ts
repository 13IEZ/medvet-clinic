import styled from '@emotion/styled';
import { Box, TextField } from '@mui/material';

export const StyledModalBody = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 31.25rem;
  background-color: #fefeff;
  box-shadow: 2px 2px 20px rgba(155, 82, 50, 0.1);
  border-radius: 1.25rem;

  @media (max-width: 48rem) {
    width: 90%;
  }
`;

export const StyledInput = styled(TextField)`
  width: 80%;
  div {
    border-radius: 1.25rem;
  }
  input {
    border-radius: 1.25rem;
  }
`;

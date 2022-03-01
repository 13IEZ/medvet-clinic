import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const StyledMainButton = styled(Button)`
  font-family: 'Futura New Bold', serif;
  font-size: 1.25rem;
  line-height: 1.25rem;
  border-radius: 2.1rem;
  background: #ffc59e;
  box-shadow: 0 4px 20px #ffc59e;
  width: 17.8rem;
  height: 4.2rem;
  z-index: 999;
  &:hover {
    background: #59443f;
  }
  @media (max-width: 64rem) {
    font-size: 100%;
    width: 10rem;
    height: 3rem;
  }
`;

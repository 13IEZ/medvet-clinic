import styled from '@emotion/styled';
import { Link } from '@mui/material';

export const MainTitle = styled.h1`
  font-family: 'Schoolbook Cyrillic', serif;
  font-size: 5rem;
  color: #080606;
  white-space: pre-wrap;
  margin: 0;
`;

export const StyledPhoneLink = styled(Link)`
  font-family: 'Futura New Bold', serif;
  font-size: 1.5rem;
  color: #59443f;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

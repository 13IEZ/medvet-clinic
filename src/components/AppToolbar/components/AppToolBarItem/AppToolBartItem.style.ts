import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppToolServiceLink = styled(Link)`
  font-family: 'Futura New Bold', serif;
  font-size: 1.1rem;
  color: #ffc59e;
  text-align: center;
  text-decoration: none;
  &:hover {
    background-color: #59443f;
  }
  @media (max-width: 96.875rem) {
    font-size: 130%;
  }
`;

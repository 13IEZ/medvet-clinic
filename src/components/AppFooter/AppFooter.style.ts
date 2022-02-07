import styled from '@emotion/styled';
import { Typography, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  background-color: #58453f;
  height: 25vh;
`;

export const StyledFooterTitle = styled(Typography)`
  font-family: 'Schoolbook Bold Cyrillic', serif;
  color: #fff;
  font-size: 3.125rem;
  line-height: 2.875rem;
`;

export const StyledUrlLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

export const StyledFooterLink = styled(MUILink)`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #fff;
  }
`;

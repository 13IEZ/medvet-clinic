import styled from '@emotion/styled';
import { Typography, Link as MUILink, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: #58453f;
  height: auto;
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

export const StyledFooterHolder = styled(Grid)`
  flex-direction: row;
  justify-content: space-between;

  padding: 2rem 0;
  flex-wrap: nowrap;
  @media (max-width: 48rem) {
    flex-wrap: wrap;
  }
`;

export const StyledFooterBlockHolder = styled(Grid)`
  @media (max-width: 48rem) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

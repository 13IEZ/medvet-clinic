import { Card, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface IStyledCard {
  ic: string;
  ic_hover: string;
}

export const StyledTypography = styled(Typography)`
  font-family: 'Schoolbook Cyrillic', serif;
  color: #59443f;
  font-size: 1.875rem;
  line-height: 2.5rem;
  margin: 0;
  padding: 0;
`;

export const StyledCard = styled(Card)<IStyledCard>`
  height: 13.75rem;
  max-width: 20rem;
  border-radius: 1.25rem;
  border: 1px solid #fff;
  background-image: url(${(props): string => props.ic});
  background-repeat: no-repeat;
  background-position: right 1.3rem bottom 1.3rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-image 0.1s;
  transition-delay: 0.4s;
  margin: 0.5rem 0.5rem;

  &:hover {
    border: 1px solid #59443f;
    background-image: url(${(props): string => props.ic_hover});
  }
`;

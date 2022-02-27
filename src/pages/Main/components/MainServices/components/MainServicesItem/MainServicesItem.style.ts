import { Card } from '@mui/material';
import styled from '@emotion/styled';

interface IStyledCard {
  ic: string;
  ic_hover: string;
}

export const StyledCard = styled(Card)<IStyledCard>`
  height: 13.75rem;
  width: 95%;
  border-radius: 1.25rem;
  border: 1px solid #fff;
  background-image: url(${(props): string => props.ic});
  background-repeat: no-repeat;
  background-position: right 1.3rem bottom 1.3rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-image 0.1s;
  transition-delay: 0.4s;

  &:hover {
    border: 1px solid #59443f;
    background-image: url(${(props): string => props.ic_hover});
  }
`;

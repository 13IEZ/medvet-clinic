import styled from '@emotion/styled';
import { Box, Link } from '@mui/material';
import location_ic from 'assets/images/location-ic.png';
import location_ic_hover from 'assets/images/location-ic-hover.png';

export const StyledNavLink = styled(Link)`
  font-family: 'Futura New Bold', serif;
  color: #ffc59e;
  font-size: 1.25rem;
  line-height: 1.25rem;
  position: relative;

  &::before {
    content: url(${location_ic});
    left: -1.7rem;
    top: -0.3rem;
    position: absolute;
    @media (max-width: 96.875rem) {
      left: -1.2rem;
      top: -0.5rem;
    }
    @media (max-width: 64rem) {
      left: -1.7rem;
      top: -0.3rem;
    }
  }
  &:hover {
    color: #59443f;
    &::before {
      content: url(${location_ic_hover});
      left: -1.7rem;
      top: -0.3rem;
      position: absolute;
      @media (max-width: 96.875rem) {
        left: -1.2rem;
        top: -0.5rem;
      }
      @media (max-width: 64rem) {
        left: -1.7rem;
        top: -0.3rem;
      }
    }
  }
  @media (max-width: 96.875rem) {
    font-size: 90%;
  }
  @media (max-width: 64rem) {
    font-size: 120%;
  }
`;

export const StyledImg = styled.img`
  cursor: pointer;
  @media (max-width: 96.875rem) {
    height: 6rem;
  }
`;

export const StyledWideMenu = styled(Box)`
  width: 75%;
  @media (max-width: 64rem) {
    display: none;
  }
`;

export const StyledMobileMenu = styled(Box)`
  display: none;
  @media (max-width: 64rem) {
    display: block;
  }
`;

export const StyledLocationHolder = styled(Box)`
  display: block;
  @media (max-width: 30rem) {
    display: none;
  }
`;

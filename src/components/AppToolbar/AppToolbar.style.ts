import styled from '@emotion/styled';
import Link from '@mui/material/Link';
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
  }
  &:hover {
    color: #59443f;
    &::before {
      content: url(${location_ic_hover});
      left: -1.7rem;
      top: -0.3rem;
      position: absolute;
    }
  }
`;

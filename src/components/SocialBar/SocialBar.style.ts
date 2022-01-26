import styled from '@emotion/styled';
import { IStyledIc } from 'components/SocialBar/SocialBar.types';

export const StyledIc = styled.div<IStyledIc>`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${(props): string => props.ic});

  &:hover {
    background-image: url(${(props): string => props.icHover});
    transition: 0.3s all;
  }
`;

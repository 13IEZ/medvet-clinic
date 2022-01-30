import styled from '@emotion/styled';

interface IStyledIc {
  ic: string;
  icHover: string;
}

export const StyledIc = styled.div<IStyledIc>`
  width: 2.5rem;
  height: 2.5rem;
  background-image: url(${(props): string => props.ic});

  &:hover {
    background-image: url(${(props): string => props.icHover});
    transition: 0.3s all;
  }
`;

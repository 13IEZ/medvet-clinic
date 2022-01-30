import styled from '@emotion/styled';

interface IStyledDots {
  active: boolean | undefined;
}

export const StyledDot = styled.div<IStyledDots>`
  font-family: 'Futura New Bold', serif;
  color: ${(props): string => (props.active ? '#080606' : '#c3b9b5')};
  font-size: 1.25rem;
  cursor: pointer;
  width: 2.5rem;
  line-height: 2.3rem;
  margin: auto;

  border: 1px solid transparent;
  border-radius: 80px;
  background-image: linear-gradient(white, white),
    linear-gradient(90deg, rgba(8, 6, 6, 1) 95%, rgba(195, 185, 181, 1) 96%);
  background-origin: border-box;
  background-clip: ${(props): string => (props.active ? 'content-box, border-box' : 'none')};

  &:hover {
    color: #080606;
  }
`;

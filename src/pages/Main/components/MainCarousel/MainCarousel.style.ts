import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';

export const StyledCarousel = styled(Carousel)`
  margin: 7rem 0;

  @media (max-width: 96.875rem) {
    margin-top: 5rem;
  }

  @media (max-width: 48rem) {
    margin: 0;
    padding: 5rem 0;
    position: relative;
  }

  & > ul:last-child {
    flex-direction: column;
    width: 5%;
    gap: 6rem;
    top: 0;
    left: 7%;
    @media (max-width: 96.875rem) {
      left: 2%;
      gap: 4rem;
    }
    @media (max-width: 64rem) {
      gap: 3rem;
    }
    @media (max-width: 48rem) {
      position: absolute;
      width: 100%;
      flex-direction: row;
      gap: 1rem;
      left: 0;
      top: 90%;
    }
  }
`;

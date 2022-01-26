import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from '@emotion/styled';

export const StyledCarousel = styled(Carousel)`
  height: 90vh;
  margin-top: 2rem;

  & > ul:last-child {
    flex-direction: column;
    width: 5%;
    gap: 6rem;
    top: 0;
    left: 7%;
  }
`;

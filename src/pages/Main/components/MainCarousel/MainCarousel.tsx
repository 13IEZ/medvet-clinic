import React, { FC, useState } from 'react';
import { mainCarouselApi } from 'store/services/Main/MainCarouselService/MainCarouselService';
import CustomDots from 'pages/Main/components/MainCarousel/components/CustomDots/CustomDots';
import 'react-multi-carousel/lib/styles.css';
import { StyledCarousel } from 'pages/Main/components/MainCarousel/MainCarousel.style';
import CarouselChild from 'pages/Main/components/MainCarousel/components/CarouselChild/CarouselChild';
import ContactsFormModal from 'components/ContactsFormModal/ContactsFormModal';
import SkeletonMainCarousel from 'pages/Main/components/MainCarousel/components/SkeletonMainCarousel/SkeletonMainCarousel';

const MainCarousel: FC = () => {
  const { data: carouselData, error: fetchError } = mainCarouselApi.useFetchCarouselDataQuery('');

  const [isOpen, setIsOpen] = useState(false);
  const handleModalAction = (): void => setIsOpen(!isOpen);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };

  return carouselData ? (
    <main>
      <StyledCarousel
        draggable={false}
        responsive={responsive}
        arrows={false}
        infinite={true}
        showDots
        customDot={<CustomDots />}
        autoPlay={!isOpen}
        autoPlaySpeed={6000}
      >
        {carouselData.map(elem => (
          <CarouselChild key={elem.id} item={elem} handleModalAction={handleModalAction} />
        ))}
      </StyledCarousel>
      <ContactsFormModal open={isOpen} handleAction={handleModalAction} />
    </main>
  ) : (
    <SkeletonMainCarousel />
  );
};

export default MainCarousel;

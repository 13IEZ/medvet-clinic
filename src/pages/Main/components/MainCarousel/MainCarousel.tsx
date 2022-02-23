import React, { FC, useState } from 'react';
import { mainCarouselApi } from 'store/services/Main/MainCarouselService/MainCarouselService';
import CustomDots from 'pages/Main/components/MainCarousel/components/CustomDots/CustomDots';
import 'react-multi-carousel/lib/styles.css';
import { StyledCarousel } from 'pages/Main/components/MainCarousel/MainCarousel.style';
import CarouselChild from 'pages/Main/components/MainCarousel/components/CarouselChild/CarouselChild';
import { Skeleton, Grid } from '@mui/material';
import ContactsForm from 'components/ContactsForm/ContactsForm';

const MainCarousel: FC = () => {
  const { data: carouselData, error: fetchError } = mainCarouselApi.useFetchCarouselDataQuery('');

  const [isOpen, setIsOpen] = useState(false);
  const handleModalAction = (): void => setIsOpen(!isOpen);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 360 },
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
      <ContactsForm open={isOpen} handleAction={handleModalAction} />
    </main>
  ) : (
    <Grid
      container
      direction='row'
      wrap='nowrap'
      justifyContent='center'
      alignItems='center'
      sx={{ height: '90vh' }}
    >
      <Grid item xs={2}>
        <Grid container direction='column' alignItems='center' gap={5}>
          <Skeleton variant='circular' height='4rem' width='4rem' />
          <Skeleton variant='circular' height='4rem' width='4rem' />
          <Skeleton variant='circular' height='4rem' width='4rem' />
          <Skeleton variant='circular' height='4rem' width='4rem' />
          <Skeleton variant='circular' height='4rem' width='4rem' />
        </Grid>
      </Grid>
      <Grid item xs={10} sx={{ height: '100%' }}>
        <Grid container justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
          <Skeleton variant='rectangular' width='95%' height='80%' sx={{ borderRadius: '3rem' }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainCarousel;

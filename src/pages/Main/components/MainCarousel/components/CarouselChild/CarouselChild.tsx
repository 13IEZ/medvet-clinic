import React, { FC } from 'react';
import { Grid } from '@mui/material';
import {
  MainTitle,
  StyledPhoneLink,
} from 'pages/Main/components/MainCarousel/components/CarouselChild/CarouselChild.style';
import MainButton from 'components/Buttons/MainButton/MainButton';
import SocialBar from 'components/SocialBar/SocialBar';
import { IMainCarousel } from 'store/services/Main/MainCarouselService/MainCarouselService.types';

interface CarouselChild {
  item: IMainCarousel;
}

const CarouselChild: FC<CarouselChild> = ({ item }) => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='flex-end'
      alignItems='flex-end'
      wrap='nowrap'
      gap={30}
      sx={{ height: '100%' }}
    >
      <Grid item xs={4} sx={{ height: '100%' }}>
        <Grid container direction='column' justifyContent='space-evenly' sx={{ height: '100%' }}>
          <MainTitle>{item.title}</MainTitle>
          <MainButton />
          <SocialBar inst={item.inst} whatsApp={item.whatsApp} />
        </Grid>
      </Grid>
      <Grid item xs={4} container justifyContent='flex-end' sx={{ position: 'relative' }}>
        <img src={item.img} alt='img' height={800} />
        {item.numbers && (
          <Grid
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={{ position: 'absolute', bottom: '10%', right: '-15%' }}
          >
            {item.numbers.map(elem => (
              <StyledPhoneLink key={elem} href={`tel:+${elem}`}>
                +{elem}
              </StyledPhoneLink>
            ))}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default CarouselChild;

import React, { FC, MouseEventHandler } from 'react';
import { Grid } from '@mui/material';
import {
  MainTitle,
  StyledPhoneLink,
  StyleCarouselImg,
  StyledContentHolder,
  StyledPhoneHolder,
} from 'pages/Main/components/MainCarousel/components/CarouselChild/CarouselChild.style';
import MainButton from 'components/Buttons/MainButton/MainButton';
import SocialBar from 'components/SocialBar/SocialBar';
import { IMainCarousel } from 'store/services/Main/MainCarouselService/MainCarouselService.types';

interface CarouselChild {
  item: IMainCarousel;
  handleModalAction: MouseEventHandler;
}

const CarouselChild: FC<CarouselChild> = ({ item, handleModalAction }) => {
  return (
    <StyledContentHolder
      container
      direction='row'
      justifyContent='flex-end'
      alignItems='flex-end'
      wrap='nowrap'
    >
      <Grid item xs={3} sx={{ height: '100%' }}>
        <Grid container direction='column' justifyContent='space-between' sx={{ height: '100%' }}>
          <MainTitle>{item.title}</MainTitle>
          <MainButton action={handleModalAction} title='ЗАПИСАТЬСЯ' />
          <SocialBar inst={item.inst} whatsApp={item.whatsApp} />
        </Grid>
      </Grid>
      <Grid item xs={5} container justifyContent='flex-end' sx={{ position: 'relative' }}>
        <StyleCarouselImg src={item.img} alt='img' />
        {item.numbers && (
          <StyledPhoneHolder
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            {item.numbers.map(elem => (
              <StyledPhoneLink key={elem} href={`tel:+${elem}`}>
                +{elem}
              </StyledPhoneLink>
            ))}
          </StyledPhoneHolder>
        )}
      </Grid>
    </StyledContentHolder>
  );
};

export default CarouselChild;

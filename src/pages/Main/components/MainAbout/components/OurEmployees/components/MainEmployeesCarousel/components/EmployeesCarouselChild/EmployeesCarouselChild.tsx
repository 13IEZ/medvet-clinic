import React, { FC } from 'react';
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { IEmployeesCarousel } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService.types';
import {
  StyledEmployeesCarouselTitle,
  StyledEmployeesCarouselText,
} from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/components/EmployeesCarouselChild/EmployeesCarouselChild.style';

interface IEmployeesCarouselChild {
  item: IEmployeesCarousel;
}

const EmployeesCarouselChild: FC<IEmployeesCarouselChild> = ({ item }) => {
  return (
    <Card sx={{ margin: '1rem', height: '25rem' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia component='img' image={item.photo} alt='green iguana' height='60%' />
        <CardContent sx={{ height: '100%' }}>
          <StyledEmployeesCarouselTitle variant='h3'>{item.position}</StyledEmployeesCarouselTitle>
          <StyledEmployeesCarouselText paragraph>{item.fullName}</StyledEmployeesCarouselText>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EmployeesCarouselChild;

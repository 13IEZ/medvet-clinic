import React, { FC } from 'react';
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import { IEmployeesCarousel } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService.types';
import {
  StyledEmployeesCarouselTitle,
  StyledEmployeesCarouselText,
} from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/components/EmployeesCarouselChild/EmployeesCarouselChild.style';
import { Link, useParams } from 'react-router-dom';

interface IEmployeesCarouselChild {
  item: IEmployeesCarousel;
}

const EmployeesCarouselChild: FC<IEmployeesCarouselChild> = ({ item }) => {
  const params = useParams();

  return (
    <Link
      to={params['id'] ? `../${item.id}` : `employees/${item.id}`}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={{ margin: '1rem', height: '25rem' }}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia component='img' image={item.photo} alt='photo' height='60%' />
          <CardContent sx={{ height: '100%' }}>
            <StyledEmployeesCarouselTitle variant='h3'>
              {item.fullName}
            </StyledEmployeesCarouselTitle>
            <StyledEmployeesCarouselText paragraph>{item.position}</StyledEmployeesCarouselText>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default EmployeesCarouselChild;

import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout/Layout';
import { Grid, Skeleton, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { StyledText, StyledSubTitle } from 'style/style';
import { employeeApi } from 'store/services/Employee/EmployeeService';
import ContactsFormModal from 'components/ContactsFormModal/ContactsFormModal';
import MainButton from 'components/Buttons/MainButton/MainButton';
import JumpButton from 'components/Buttons/JumpButton/JumpButton';
import { getTextExperience } from 'helpers/getTextExperience';
import { StyledAvatar } from 'pages/Employee/Employee.style';
import NotFound from 'pages/NotFound/NotFound';
import Carousel from 'react-multi-carousel';
import { CustomLeftArrow } from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/MainEmployeesCarousel';
import { CustomRightArrow } from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/MainEmployeesCarousel';

interface ICarouselItem {
  id: string;
  photo: string;
}

interface IEmployeeCarousel {
  data: ICarouselItem[];
}

const EmployeeCarousel: React.FC<IEmployeeCarousel> = ({ data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    smallTablet: {
      breakpoint: { max: 768, min: 481 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 481, min: 0 },
      items: 1,
    },
  };

  return data ? (
    <Carousel
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      draggable={false}
      responsive={responsive}
      arrows
      infinite
      slidesToSlide={1}
    >
      {data.map(elem => (
        <div key={elem.id}>
          <img width='100%' height='auto' src={elem.photo} alt='employee photo' />
        </div>
      ))}
    </Carousel>
  ) : (
    <div>Не удалось загрузить данные</div>
  );
};

const itemData = [
  {
    photo: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    id: 'Breakfast',
  },
  {
    photo: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    id: 'Burger',
  },
  {
    photo: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    id: 'Camera',
  },
  {
    photo: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    id: 'Coffee',
  },
  {
    photo: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    id: 'Hats',
  },
  {
    photo: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    id: 'Honey',
  },
  {
    photo: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    id: 'Basketball',
  },
  {
    photo: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    id: 'Fern',
  },
  {
    photo: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    id: 'Mushrooms',
  },
  {
    photo: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    id: 'Tomato basil',
  },
  {
    photo: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    id: 'Sea star',
  },
  {
    photo: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    id: 'Bike',
  },
];

const Employee = () => {
  const params = useParams();
  const [id, setId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const isWider480 = useMediaQuery('(max-width:480px)');
  const handleModalAction = (): void => setIsOpen(!isOpen);
  const { data: employeeData, error: fetchError } = employeeApi.useFetchEmployeeQuery(id);

  useEffect(() => {
    if (params['id']) setId(params['id']);
  }, [params]);

  const getLeftBlockComponent = () => {
    return employeeData ? (
      <Grid container flexDirection='column' alignItems='center' marginBottom={isWider480 ? 3 : 0}>
        <StyledAvatar alt='avatar' src={employeeData.photo} />
        <MainButton title='Записаться' action={handleModalAction} />
        <ContactsFormModal open={isOpen} handleAction={handleModalAction} />
      </Grid>
    ) : (
      <Grid container gap={2}>
        <Skeleton variant='circular' width={333} height={333} />
        <Skeleton variant='rectangular' width={333} height={60} />
        <Skeleton variant='rectangular' width={250} height={60} />
      </Grid>
    );
  };

  const getRightBlockComponent = () => {
    return employeeData ? (
      <>
        <Grid container flexDirection='column' spacing={5}>
          <Grid item>
            <JumpButton title='Назад' path='/employees' />
          </Grid>
          <Grid item>
            <StyledSubTitle primary='primary'>{employeeData.fullName}</StyledSubTitle>
            <StyledText color='#C3B9B5'>{getTextExperience(employeeData.experience)}</StyledText>
          </Grid>
          <Grid item>
            <StyledText color='#59443F'>{employeeData.specialization}</StyledText>
          </Grid>
          <Grid item>
            <StyledText color='#59443F'>
              {employeeData.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus cupiditate deleniti dignissimos hic, id molestias numquam quibusdam. A
              adipisci deleniti ducimus earum iste nobis nulla quae quibusdam tempora voluptatum.
              Iure, nemo ratione! Aliquid dolorum maiores numquam perferendis perspiciatis, totam
              voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
              cupiditate deleniti dignissimos hic, id molestias numquam quibusdam. A adipisci
              deleniti ducimus earum iste nobis nulla quae quibusdam tempora voluptatum. Iure, nemo
              ratione! Aliquid dolorum maiores numquam perferendis perspiciatis, totam
              voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
              cupiditate deleniti dignissimos hic, id molestias numquam quibusdam. A adipisci
              deleniti ducimus earum iste nobis nulla quae quibusdam tempora voluptatum. Iure, nemo
              ratione! Aliquid dolorum maiores numquam perferendis perspiciatis, totam
              voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
              cupiditate deleniti dignissimos hic, id molestias numquam quibusdam. A adipisci
              deleniti ducimus earum iste nobis nulla quae quibusdam tempora voluptatum. Iure, nemo
              ratione! Aliquid dolorum maiores numquam perferendis perspiciatis, totam
              voluptatibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
              cupiditate deleniti dignissimos hic, id molestias numquam quibusdam. A adipisci
              deleniti ducimus earum iste nobis nulla quae quibusdam tempora voluptatum. Iure, nemo
              ratione! Aliquid dolorum maiores numquam perferendis perspiciatis, totam voluptatibus.
            </StyledText>
          </Grid>
        </Grid>
        {!isWider480 && <EmployeeCarousel data={itemData} />}
      </>
    ) : (
      <Grid container gap={2}>
        <Skeleton variant='rectangular' width={55} height={60} />
        <Skeleton variant='rectangular' width='100%' height={400} />
      </Grid>
    );
  };

  return fetchError ? (
    <NotFound />
  ) : (
    <Layout leftBlock={getLeftBlockComponent()} rightBlock={getRightBlockComponent()} />
  );
};

export default Employee;

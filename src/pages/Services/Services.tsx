import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { listOfServicesApi } from 'store/services/Main/ListOfServices/ListOfServices';
import {
  CustomLeftArrow,
  CustomRightArrow,
} from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/MainEmployeesCarousel';
import SkeletonMainService from 'pages/Main/components/MainServices/components/SkeletonMainService/SkeletonMainService';
import { Grid, useMediaQuery, Card, CardMedia } from '@mui/material';
import { StyledImg } from 'pages/Employees/Employees.style';
import { StyledSectionTitle, StyledSubTitle, StyledText } from 'style/style';
import Layout from 'components/Layout/Layout';
import service1 from 'assets/images/service-1.png';
import service2 from 'assets/images/service-2.png';
import service3 from 'assets/images/service-3.png';
import service4 from 'assets/images/service-4.png';
import MainButton from 'components/Buttons/MainButton/MainButton';
import ContactsFormModal from 'components/ContactsFormModal/ContactsFormModal';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  smallTablet: {
    breakpoint: { max: 768, min: 481 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 481, min: 0 },
    items: 1,
  },
};

const Services = () => {
  const { data: listOfService, error: fetchError } =
    listOfServicesApi.useFetchListOfServicesQuery('');
  const isWider480 = useMediaQuery('(min-width:480px)');
  const [isOpen, setIsOpen] = useState(false);

  const handleModalAction = (): void => setIsOpen(!isOpen);

  const getLeftBlockComponent = () => (
    <Grid container flexDirection='column' alignItems='center' marginBottom={isWider480 ? 3 : 2}>
      <StyledSectionTitle marginBottom={!isWider480 ? 2 : 3}>Наши услуги</StyledSectionTitle>
      <MainButton title='Записаться' action={handleModalAction} />
    </Grid>
  );

  const getRightBlockComponent = () => (
    <>
      <StyledText color='#59443F' marginBottom={!isWider480 ? 2 : 5}>
        Мы предоставляем широкий спектр ветеринарных услуг. Высококвалифицированные и
        самоотверженные - так обычно клиенты описывают наших специалистов в своих отзывах. В нашей
        клинике есть узкопрофильные специалисты с большим опытом работы направлениях <b>хирургии</b>{' '}
        и <b>остеосинтеза</b>, <b>терапии</b>, <b>офтальмологии</b>, <b>дерматологии</b>,{' '}
        <b>гастроэнтерологии</b>, <b>нефрологии</b>,<b>пульмонологии</b>, <b>визуальной</b> и{' '}
        <b>лабораторной диагностики</b>. В постановке диагноза наши специалисты всегда опираются на
        средства современной диагностики, которые, для Вашего удобства, доступны в нашей клинике.
      </StyledText>
      <Grid container justifyContent='space-between' wrap='nowrap' gap={3}>
        <Grid item>
          <StyledImg src={service1} loading='lazy' alt='service' />
        </Grid>
        <Grid item>
          <StyledImg src={service2} loading='lazy' alt='service' />
        </Grid>
      </Grid>
      <StyledText color='#59443F' marginBottom={!isWider480 ? 2 : 5}>
        Ответ на вопрос “Почему стоит выбрать клинику МедВет”: Мы – коллектив профессионалов.
        Процесс лечения каждого пациента не замыкается на знаниях одного сотрудника, являющегося
        лечащим врачом. Мы работаем сообща, постоянно обмениваясь знаниями, совещаясь и применяя
        аналитические способности целого коллектива. Именно соблюдением профессиональной этики и
        дружественной атмосферы мы достигли исполнения такого высокого стандарта качества в лечении
        домашних животных. Кроме того, лечение животных должно быть не только эффективным, но и
        комфортным для их хозяев. И мы готовы поставить в этом высокую планку.
      </StyledText>
      <Grid container justifyContent='space-between' wrap='nowrap' gap={3}>
        <Grid item>
          <StyledImg src={service3} loading='lazy' alt='service' />
        </Grid>
        <Grid item>
          <StyledImg src={service4} loading='lazy' alt='service' />
        </Grid>
      </Grid>
      <Carousel
        customRightArrow={<CustomRightArrow position={!isWider480 ? '-9%' : '-3.5%'} />}
        draggable={false}
        customLeftArrow={<CustomLeftArrow position={!isWider480 ? '-9%' : '-3.5%'} />}
        responsive={responsive}
        arrows
        infinite
        slidesToSlide={1}
      >
        {listOfService ? (
          listOfService.map(elem => (
            <Card key={elem.id} sx={{ margin: '1rem', height: '9.3rem', padding: '0.5rem' }}>
              <StyledSubTitle
                color='#080606'
                sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {elem.title}
              </StyledSubTitle>
              <Grid container justifyContent='end' alignItems='end' width='90%'>
                <CardMedia
                  component='img'
                  image={elem.ic}
                  alt='service icon'
                  sx={{ width: 'auto', height: '5rem', marginTop: '1rem' }}
                />
              </Grid>
            </Card>
          ))
        ) : (
          <SkeletonMainService />
        )}
      </Carousel>
      <ContactsFormModal open={isOpen} handleAction={handleModalAction} />
    </>
  );

  return <Layout leftBlock={getLeftBlockComponent()} rightBlock={getRightBlockComponent()} />;
};

export default Services;

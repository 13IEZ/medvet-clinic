import React, { MutableRefObject, useRef } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import Layout from 'components/Layout/Layout';
import { StyledImg } from 'pages/Employees/Employees.style';
import EmployeeCard from 'pages/Employees/components/EmployeeCard/EmployeeCard';
import { StyledText, StyledSectionTitle, StyledSubTitle } from 'style/style';
import { employeesCarouselApi } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService';
import { scrollTo } from 'helpers/scrollTo';
import employeesPhoto from 'assets/images/employees.jpg';

const Employees = () => {
  const { data: employeesCarouselData, error: fetchError } =
    employeesCarouselApi.useFetchEmployeesCarouselQuery('');
  const refAbout = useRef() as MutableRefObject<HTMLElement>;
  const refSpecialists = useRef() as MutableRefObject<HTMLElement>;
  const isWider480 = useMediaQuery('(min-width:480px)');

  const getLeftBlockComponent = () => {
    return (
      <>
        <StyledSectionTitle marginBottom={!isWider480 ? 2 : 5}>Коллектив</StyledSectionTitle>
        <StyledSubTitle
          sx={{ cursor: 'pointer' }}
          onClick={() => scrollTo(refAbout.current.getBoundingClientRect().top)}
        >
          О нас
        </StyledSubTitle>
        <StyledSubTitle
          onClick={() => scrollTo(refSpecialists.current.getBoundingClientRect().top)}
          sx={{ cursor: 'pointer' }}
        >
          Специалисты
        </StyledSubTitle>
      </>
    );
  };

  const getRightBlockComponent = () => {
    return (
      <>
        <StyledImg loading='lazy' src={employeesPhoto} alt='our employees' />
        <StyledSubTitle ref={refAbout} primary='primary'>
          О нас
        </StyledSubTitle>
        <StyledText color='#59443F' marginBottom={!isWider480 ? 2 : 5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate deleniti
          dignissimos hic, id molestias numquam quibusdam. A adipisci deleniti ducimus earum iste
          nobis nulla quae quibusdam tempora voluptatum. Iure, nemo ratione! Aliquid dolorum maiores
          numquam perferendis perspiciatis, totam voluptatibus.
        </StyledText>
        <StyledSubTitle ref={refSpecialists} primary='primary'>
          Специалисты
        </StyledSubTitle>
        <Grid container spacing={2}>
          {employeesCarouselData?.map(i => (
            <EmployeeCard key={i.id} {...i} />
          ))}
        </Grid>
      </>
    );
  };

  return <Layout leftBlock={getLeftBlockComponent()} rightBlock={getRightBlockComponent()} />;
};

export default Employees;

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
import MainEmployeesCarousel from 'pages/Main/components/MainAbout/components/OurEmployees/components/MainEmployeesCarousel/MainEmployeesCarousel';
import { employeesCarouselApi } from 'store/services/Main/EmployeesCarouselService/EmployeesCarouselService';

const Employee = () => {
  const params = useParams();
  const [id, setId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const isWider480 = useMediaQuery('(max-width:480px)');
  const handleModalAction = (): void => setIsOpen(!isOpen);
  const { data: employeeData, error: fetchError } = employeeApi.useFetchEmployeeQuery(id);
  const { data: employeesCarouselData, error: carouselError } =
    employeesCarouselApi.useFetchEmployeesCarouselQuery('');

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
            <StyledText color='#59443F'>{employeeData.description}</StyledText>
          </Grid>
        </Grid>
        {!carouselError && <MainEmployeesCarousel employeesCarouselData={employeesCarouselData} />}
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

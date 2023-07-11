import React from 'react';
import { CardActionArea, Grid, Avatar, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledEmployeesCard } from 'pages/Employees/components/EmployeeCard/EmployeeCard.style';
import { StyledText } from 'style/style';
import { getTextExperience } from 'helpers/getTextExperience';
import { IEmployeesCarousel } from '../../../../store/services/Main/EmployeesCarouselService/EmployeesCarouselService.types';

const EmployeeCard: React.FC<IEmployeesCarousel> = ({
  photo,
  experience,
  position,
  fullName,
  specialization,
  id,
}) => {
  const isWider420 = useMediaQuery('(min-width:420px)');

  return (
    <Grid item lg={6} md={12} xs={12}>
      <Link to={`${id}`} style={{ textDecoration: 'none' }}>
        <StyledEmployeesCard>
          <CardActionArea sx={{ padding: '1rem', minHeight: '15.5rem' }}>
            <Grid container justifyContent='center' alignItems='center' spacing={2}>
              <Grid
                item
                container
                xs={!isWider420 ? 12 : 4}
                justifyContent='center'
                alignItems='center'
                direction='column'
                gap={2}
              >
                <Avatar sx={{ width: 115, height: 115 }} alt='avatar' src={photo} />
                <StyledText fontWeight='bold' color='#FFC59E'>
                  {getTextExperience(experience)}
                </StyledText>
              </Grid>
              <Grid item container xs={!isWider420 ? 12 : 8} gap={1}>
                <Grid item xs={12}>
                  <StyledText style={{ fontSize: '1rem' }} color='#C3B9B5'>
                    {position}
                  </StyledText>
                  <StyledText fontWeight='bold' color='#080606'>
                    {fullName}
                  </StyledText>
                </Grid>
                <Grid item>
                  <StyledText style={{ fontSize: '1rem' }} color='#C3B9B5'>
                    Cпециализация
                  </StyledText>
                  <StyledText fontWeight='bold' color='#080606'>
                    {specialization}
                  </StyledText>
                </Grid>
              </Grid>
            </Grid>
          </CardActionArea>
        </StyledEmployeesCard>
      </Link>
    </Grid>
  );
};

export default EmployeeCard;

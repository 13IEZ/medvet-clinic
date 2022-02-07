import React, { FC } from 'react';
import { IListOfServices } from 'store/services/Main/ListOfServices/ListOfServices.types';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { StyledCard } from 'pages/Main/components/MainServices/components/MainServicesItem/MainServicesItem.style';
import { StyledSubTitle } from 'style/style';

interface IMainServiceItem {
  item: IListOfServices;
}

const MainServicesItem: FC<IMainServiceItem> = ({ item }) => {
  return (
    <Grid item xs={4} sm={3} md={3}>
      <Link to={item.path} style={{ textDecoration: 'none' }}>
        <StyledCard ic={item.ic} ic_hover={item.ic_hover}>
          <StyledSubTitle primary='primary' variant='h3'>
            {item.title}
          </StyledSubTitle>
        </StyledCard>
      </Link>
    </Grid>
  );
};

export default MainServicesItem;

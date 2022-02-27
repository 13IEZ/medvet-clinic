import React, { FC } from 'react';
import { IMainAdvantages } from 'store/services/Main/MainAdvantagesService/MainAdvantagesService.types';
import { StyledSubTitle, StyledText } from 'style/style';
import { Grid } from '@mui/material';

interface IMainAdvantagesItem {
  item: IMainAdvantages;
}

const MainAdvantagesItem: FC<IMainAdvantagesItem> = ({ item }) => {
  return (
    <Grid item xs={4} sm={5} md={4}>
      <Grid item sx={{ paddingBottom: '2rem' }}>
        <StyledSubTitle variant='h3'>{item.title}</StyledSubTitle>
      </Grid>

      <Grid item>
        <Grid container direction='row' alignItems='center' wrap='nowrap'>
          <Grid item xs={3}>
            <Grid container justifyContent='flex-start'>
              <img src={item.img} alt='advantages image' />
            </Grid>
          </Grid>

          <Grid item xs={9}>
            <StyledText color='#59443F'>{item.text}</StyledText>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainAdvantagesItem;

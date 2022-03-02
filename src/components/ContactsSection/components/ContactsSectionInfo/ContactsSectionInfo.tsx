import React, { FC } from 'react';
import { mainContactsApi } from 'store/services/Main/MainContactsService/MainContactsService';
import { Grid, Box, Link, Skeleton } from '@mui/material';
import { StyledText } from 'style/style';
import location from 'assets/images/location-ic.png';
import phone from 'assets/images/phone-ic.png';
import clock from 'assets/images/clock-ic.png';

const ContactsSectionInfo: FC = () => {
  const { data: contactsData, error: fetchError } = mainContactsApi.useFetchContactsDataQuery('');

  return (
    <Grid item sx={{ margin: '0 auto' }}>
      <Grid container direction='column'>
        <Box>
          <Grid container justifyContent='space-between' alignItems='center' wrap='nowrap'>
            <Grid item sx={{ marginRight: '2rem' }}>
              <img src={location} alt='location icon' />
            </Grid>
            <Grid item>
              {contactsData ? (
                <Link
                  target='_blank'
                  rel='noopener'
                  href={contactsData.gisLink}
                  underline='hover'
                  color='#59443f'
                >
                  <StyledText color='#59443F'>{contactsData.city}</StyledText>
                  <StyledText color='#59443F'>{contactsData.address}</StyledText>
                </Link>
              ) : (
                <Skeleton variant='text' height={50} width={'5rem'} />
              )}
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ margin: '2rem 0' }}>
          <Grid container alignItems='center' wrap='nowrap'>
            <Grid item sx={{ marginRight: '2rem' }}>
              <img src={phone} alt='phone icon' />
            </Grid>
            <Grid item>
              {contactsData ? (
                contactsData.number.map(elem => (
                  <Link
                    key={elem}
                    underline='hover'
                    color='#59443f'
                    href={elem.toString().length === 7 ? `tel:+7727${elem}` : `tel:+${elem}`}
                  >
                    <StyledText color='#59443F' sx={{ marginBottom: '1rem' }}>
                      {elem.toString().length === 7 ? `+7(727)${elem}` : `+${elem}`}
                    </StyledText>
                  </Link>
                ))
              ) : (
                <Skeleton variant='text' height={50} width={'5rem'} />
              )}
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container alignItems='center' wrap='nowrap'>
            <Grid item sx={{ marginRight: '2rem' }}>
              <img src={clock} alt='phone icon' />
            </Grid>
            <Grid item>
              {contactsData ? (
                <StyledText color='#59443F'>{contactsData.timeWork}</StyledText>
              ) : (
                <Skeleton variant='text' height={50} width={'5rem'} />
              )}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactsSectionInfo;

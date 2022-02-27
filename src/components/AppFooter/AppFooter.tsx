import React, { FC } from 'react';
import { Grid, Box, Skeleton } from '@mui/material';
import color_log from 'assets/images/color-logo.jpeg';
import {
  StyledFooter,
  StyledFooterTitle,
  StyledUrlLink,
  StyledFooterLink,
  StyledFooterHolder,
  StyledFooterBlockHolder,
} from 'components/AppFooter/AppFooter.style';
import { StyledContainer, StyledText } from 'style/style';
import { Link } from 'react-router-dom';
import { footerApi } from 'store/services/FooterService/FooterService';
import SocialBar from 'components/SocialBar/SocialBar';

const AppFooter: FC = () => {
  const { data: footers, error: fetchError } = footerApi.useFetchFootersQuery('');

  return (
    <StyledFooter>
      <StyledContainer maxWidth={false} width='91rem'>
        <StyledFooterHolder container alignItems='center'>
          <StyledFooterBlockHolder item>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <Grid container alignItems='center' justifyContent='center'>
                <Box sx={{ marginRight: '1rem' }}>
                  <img
                    src={color_log}
                    alt='logo'
                    height={70}
                    width={70}
                    style={{ borderRadius: '50%' }}
                  />
                </Box>
                <Box>
                  <StyledFooterTitle>MedVet</StyledFooterTitle>
                  <StyledText color='#fff'>ветеринарная клиника</StyledText>
                </Box>
              </Grid>
            </Link>
          </StyledFooterBlockHolder>

          <Grid item sx={{ width: '40%' }}>
            <Grid container direction='column'>
              {footers ? (
                footers.list.map(elem => (
                  <StyledFooterLink key={elem.title}>
                    <StyledText color='#fff'>{elem.title}</StyledText>
                  </StyledFooterLink>
                ))
              ) : (
                <Grid item>
                  <Skeleton variant='text' width={210} height={50} sx={{ bgcolor: '#fff' }} />
                  <Skeleton variant='text' width={200} height={50} sx={{ bgcolor: '#fff' }} />
                  <Skeleton variant='text' width={150} height={50} sx={{ bgcolor: '#fff' }} />
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction='column'>
              {footers ? (
                footers.linksList.map(elem => (
                  <StyledUrlLink key={elem.key} to={elem.key}>
                    <StyledText color='#fff'>{elem.title}</StyledText>
                  </StyledUrlLink>
                ))
              ) : (
                <Grid>
                  <Skeleton variant='text' width={200} height={50} sx={{ bgcolor: '#fff' }} />
                  <Skeleton variant='text' width={220} height={50} sx={{ bgcolor: '#fff' }} />
                  <Skeleton variant='text' width={170} height={50} sx={{ bgcolor: '#fff' }} />
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction='column'>
              <SocialBar whatsApp={77086991943} inst='https://www.instagram.com/medvet.kz' />
              <StyledFooterLink href='mailto:medvet.kz@gmail.com' sx={{ margin: '1rem 0' }}>
                <StyledText color='#fff'>medvet.kz@gmail.com</StyledText>
              </StyledFooterLink>
              <StyledFooterLink
                target='_blank'
                rel='noopener'
                href='https://www.linkedin.com/in/igor-zakharov-32b23520a/'
              >
                <StyledText color='#fff'>Made by 13iez</StyledText>
              </StyledFooterLink>
            </Grid>
          </Grid>
        </StyledFooterHolder>
      </StyledContainer>
    </StyledFooter>
  );
};

export default AppFooter;

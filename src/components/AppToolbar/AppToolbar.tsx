import React, { FC } from 'react';
import Box from '@mui/material/Box';
import logo from 'assets/images/logo.png';
import { StyledContainer } from 'style/style';
import { Grid, Skeleton } from '@mui/material';
import { headerApi } from 'store/services/HeaderService/HeaderService';
import AppToolbarItem from 'components/AppToolbar/components/AppToolBarItem/AppToolbarItem';
import AppToolBarMobile from 'components/AppToolbar/components/AppToolBarMobile/AppToolBarMobile';
import {
  StyledNavLink,
  StyledImg,
  StyledWideMenu,
  StyledMobileMenu,
  StyledLocationHolder,
} from 'components/AppToolbar/AppToolbar.style';
import { Link } from 'react-router-dom';

const AppToolbar: FC = () => {
  const { data: headers, error: fetchError } = headerApi.useFetchHeadersQuery('');

  return (
    <header id='back-to-top-anchor' style={{ height: '10vh', marginTop: '1rem' }}>
      <nav>
        <StyledContainer maxWidth={false} width='110rem'>
          <Grid container justifyContent='space-between' alignItems='center' wrap='nowrap'>
            <Box>
              {headers ? (
                <Link to='/'>
                  <StyledImg src={logo} alt='Logotype' />
                </Link>
              ) : (
                !headers && !fetchError && <Skeleton variant='circular' width={100} height={100} />
              )}
            </Box>

            <StyledWideMenu>
              <Grid container justifyContent='space-around' wrap='nowrap'>
                {headers
                  ? headers.map(elem => <AppToolbarItem key={elem.key} item={elem} />)
                  : !headers &&
                    !fetchError && (
                      <>
                        <Skeleton variant='text' width={120} height={45} />
                        <Skeleton variant='text' width={120} height={45} />
                        <Skeleton variant='text' width={120} height={45} />
                        <Skeleton variant='text' width={120} height={45} />
                      </>
                    )}
                {fetchError && (
                  <h2>
                    Упс... кажется шапка не загрузилась (Не волнуйтесь, мы уже выясняем причины)
                  </h2>
                )}
              </Grid>
            </StyledWideMenu>

            <StyledLocationHolder>
              {headers ? (
                <StyledNavLink
                  target='_blank'
                  color='#59443f'
                  underline='hover'
                  rel='noopener'
                  href='https://2gis.kz/almaty/firm/70000001055591999?m=76.962996%2C43.236372%2F16'
                >
                  АЛМАТЫ
                </StyledNavLink>
              ) : (
                !headers && !fetchError && <Skeleton variant='text' width={150} height={45} />
              )}
            </StyledLocationHolder>

            <StyledMobileMenu>
              <AppToolBarMobile />
            </StyledMobileMenu>
          </Grid>
        </StyledContainer>
      </nav>
    </header>
  );
};

export default AppToolbar;

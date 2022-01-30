import React, { FC } from 'react';
import Box from '@mui/material/Box';
import logo from 'assets/images/logo.png';
import { StyledContainer } from '../../style';
import Grid from '@mui/material/Grid';
import { headerApi } from 'store/services/HeaderService/HeaderService';
import AppToolbarItem from 'components/AppToolbar/components/AppToolBarItem/AppToolbarItem';
import { StyledNavLink } from 'components/AppToolbar/AppToolbar.style';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const AppToolbar: FC = () => {
  const { data: headers, error: fetchError } = headerApi.useFetchHeadersQuery('');

  return (
    <header style={{ marginTop: '50px' }}>
      <nav>
        <StyledContainer maxWidth={false} width='110rem'>
          <Grid container justifyContent='space-between' alignItems='center'>
            <Box>
              <Link to='/'>
                <img src={logo} alt='Logotype' style={{ cursor: 'pointer' }} />
              </Link>
            </Box>
            <Box>
              <Grid container gap={8}>
                {headers
                  ? headers.map(elem => <AppToolbarItem key={elem.key} item={elem} />)
                  : !headers && !fetchError && <CircularProgress />}

                {fetchError && (
                  <h2>
                    Упс... кажется шапка не загрузилась (Не волнуйтесь, мы уже выясняем причины)
                  </h2>
                )}
              </Grid>
            </Box>
            <Box>
              <StyledNavLink
                target='_blank'
                color='#59443f'
                underline='hover'
                rel='noopener'
                href='https://2gis.kz/almaty/firm/70000001055591999?m=76.962996%2C43.236372%2F16'
              >
                АЛМАТЫ
              </StyledNavLink>
            </Box>
          </Grid>
        </StyledContainer>
      </nav>
    </header>
  );
};

export default AppToolbar;

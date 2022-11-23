import React, { FC, useState } from 'react';
import { IconButton, Drawer, List, ListSubheader } from '@mui/material';
import menu_icon from 'assets/images/menu-ic.png';
import close_icon from 'assets/images/close-ic.png';
import { headerApi } from 'store/services/HeaderService/HeaderService';
import AppToolbarMobileItem from 'components/AppToolbar/components/AppToolBarMobile/components/AppToolbarMobileItem/AppToolbarMobileItem';
import AppToolbarMobileLocationItem from 'components/AppToolbar/components/AppToolBarMobile/components/AppToolbarMobileLocationItem/AppToolbarMobileLocationItem';
import { StyledText } from 'style/style';

const AppToolBarMobile: FC = () => {
  const { data: headers, error: fetchError } = headerApi.useFetchHeadersQuery('');
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpenMenu(!isOpenMenu)}>
        <img src={menu_icon} alt='menu icon' height={32} />
      </IconButton>
      <Drawer anchor='right' open={isOpenMenu} onClose={() => setIsOpenMenu(!isOpenMenu)}>
        <List component='nav' sx={{ width: '100%' }}>
          <ListSubheader>
            <StyledText color='#080606'>Навигация</StyledText>
          </ListSubheader>
          {headers &&
            headers.map(elem => (
              <AppToolbarMobileItem item={elem} key={elem.key} setIsOpenMenu={setIsOpenMenu} />
            ))}
          <AppToolbarMobileLocationItem />
        </List>
        <IconButton disableRipple onClick={() => setIsOpenMenu(false)} sx={{ marginTop: '2rem' }}>
          <img src={close_icon} alt='menu icon' height={25} />
        </IconButton>
      </Drawer>
    </>
  );
};

export default AppToolBarMobile;

import React from 'react';
import { ListSubheader, ListItemButton, ListItemIcon, Divider } from '@mui/material';
import { ToolbarMobileLocationItemHolder } from 'components/AppToolbar/components/AppToolBarMobile/components/AppToolbarMobileLocationItem/AppToolbarMobileLocationItem.style';
import location from 'assets/images/location-ic.png';
import { StyledListItemText } from 'components/AppToolbar/components/AppToolBarMobile/components/AppToolbarMobileItem/AppToolbarMobileItem.style';
import { StyledNavLink } from 'components/AppToolbar/AppToolbar.style';

const AppToolbarMobileLocationItem = () => {
  return (
    <ToolbarMobileLocationItemHolder>
      <Divider />
      <ListSubheader>Расположение</ListSubheader>
      <StyledNavLink
        target='_blank'
        rel='noopener'
        href='https://2gis.kz/almaty/firm/70000001055591999?m=76.962996%2C43.236372%2F16'
        sx={{ textDecoration: 'none' }}
      >
        <ListItemButton>
          <ListItemIcon>
            <img src={location} alt='menu icon' height={30} />
          </ListItemIcon>
          <StyledListItemText>Алматы</StyledListItemText>
        </ListItemButton>
      </StyledNavLink>

      <Divider />
    </ToolbarMobileLocationItemHolder>
  );
};

export default AppToolbarMobileLocationItem;

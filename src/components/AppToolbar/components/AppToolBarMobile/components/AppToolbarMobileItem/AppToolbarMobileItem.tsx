import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { List, ListItemButton, Collapse, ListItemIcon } from '@mui/material';
import up from 'assets/images/chevron-up.png';
import down from 'assets/images/chevron-down.png';
import blog from 'assets/images/blog-ic.png';
import team from 'assets/images/team-ic.png';
import services from 'assets/images/service-ic.png';
import about from 'assets/images/about-ic.png';
import promotions from 'assets/images/promotion-ic.png';
import contacts from 'assets/images/contact-ic.png';
import check from 'assets/images/check-mark-ic.png';
import { IHeaders } from 'store/services/HeaderService/HeaderService.types';
import { Link } from 'react-router-dom';
import {
  StyledListItemText,
  StyledListSubItemText,
} from 'components/AppToolbar/components/AppToolBarMobile/components/AppToolbarMobileItem/AppToolbarMobileItem.style';

interface IAppToolbarItemMobile {
  item: IHeaders;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const AppToolbarMobileItem: FC<IAppToolbarItemMobile> = ({ item, setIsOpenMenu }) => {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  const icons: { [key: string]: string } = {
    blog: blog,
    employees: team,
    services: services,
    about: about,
    newsPromotions: promotions,
    contacts: contacts,
  };

  const getMobileItem = () => {
    switch (item.key) {
      case 'services':
        return (
          <>
            <ListItemButton onClick={() => setIsOpenCollapse(!isOpenCollapse)}>
              <ListItemIcon>
                <img src={services} alt='menu icon' height={30} />
              </ListItemIcon>
              <StyledListItemText>{item.title}</StyledListItemText>
              <ListItemIcon>
                {isOpenCollapse ? (
                  <img src={up} alt='chevron' height={20} style={{ marginRight: '1rem' }} />
                ) : (
                  <img src={down} alt='chevron' height={20} style={{ marginRight: '1rem' }} />
                )}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={isOpenCollapse} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                {item.services &&
                  item.services.map(elem => (
                    <Link key={elem.key} style={{ textDecoration: 'none' }} to={elem.key}>
                      <ListItemButton sx={{ pl: 4 }} onClick={() => setIsOpenMenu(false)}>
                        <ListItemIcon>
                          <img src={check} alt='service icon' height={20} />
                        </ListItemIcon>
                        <StyledListSubItemText>{elem.title}</StyledListSubItemText>
                      </ListItemButton>
                    </Link>
                  ))}
              </List>
            </Collapse>
          </>
        );
      default:
        return (
          <Link to={item.key} style={{ textDecoration: 'none' }}>
            <ListItemButton onClick={() => setIsOpenMenu(false)}>
              <ListItemIcon>
                <img
                  src={icons[item.key] ? icons[item.key] : icons['newsPromotions']}
                  alt='menu icon'
                  height={30}
                />
              </ListItemIcon>
              <StyledListItemText>{item.title}</StyledListItemText>
            </ListItemButton>
          </Link>
        );
    }
  };

  return getMobileItem();
};

export default AppToolbarMobileItem;

import React, { FC } from 'react';
import { StyledNavButton } from 'components/Buttons/NavButtons/NavButtons.style';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AppToolServiceLink } from 'components/AppToolbar/components/AppToolBarItem/AppToolBartItem.style';
import { Link } from 'react-router-dom';
import { IHeaders } from 'store/services/Main/HeaderService/HeaderService.types';

interface IAppToolbarItem {
  item: IHeaders;
}

const AppToolbarItem: FC<IAppToolbarItem> = ({ item }) => {
  const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 'none',
    },
  });

  const getToolbarItem: () => JSX.Element = () => {
    switch (item.key) {
      case 'services':
        return (
          <NoMaxWidthTooltip
            disableFocusListener
            title={
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  columnGap: 3,
                  rowGap: 1,
                }}
              >
                {item.services &&
                  item.services.map(elem => (
                    <AppToolServiceLink key={elem.key} to={elem.key}>
                      {elem.title}
                    </AppToolServiceLink>
                  ))}
              </Box>
            }
          >
            <StyledNavButton>{item.title}</StyledNavButton>
          </NoMaxWidthTooltip>
        );
      default:
        return (
          <Link to={item.key} style={{ textDecoration: 'none' }}>
            <StyledNavButton>{item.title}</StyledNavButton>
          </Link>
        );
    }
  };

  return getToolbarItem();
};

export default AppToolbarItem;

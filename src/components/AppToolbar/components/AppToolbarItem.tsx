import React, { FC } from 'react';
import { StyledNavButton } from 'components/Buttons/NavButtons/NavButtons.style';
import { IAppToolbarItem } from 'components/AppToolbar/AppToolbar.types';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AppToolServiceLink } from 'components/AppToolbar/components/AppToolBartItem.style';
import { Link } from 'react-router-dom';

const AppToolbarItem: FC<IAppToolbarItem> = ({ path, title, services }) => {
  const NoMaxWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 'none',
    },
  });

  const getToolbarItem: () => JSX.Element = () => {
    switch (path) {
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
                {services.map(elem => (
                  <AppToolServiceLink key={elem.key} to={elem.key}>
                    {elem.title}
                  </AppToolServiceLink>
                ))}
              </Box>
            }
          >
            <StyledNavButton>{title}</StyledNavButton>
          </NoMaxWidthTooltip>
        );
      default:
        return (
          <Link to={path} style={{ textDecoration: 'none' }}>
            <StyledNavButton>{title}</StyledNavButton>
          </Link>
        );
    }
  };

  return getToolbarItem();
};

export default AppToolbarItem;

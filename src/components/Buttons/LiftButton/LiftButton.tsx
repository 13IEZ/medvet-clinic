import React, { FC } from 'react';
import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material';
import icon from 'assets/images/chevron-up.png';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ScrollTop(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 50 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

const LiftButton: FC = () => {
  return (
    <ScrollTop>
      <Fab color='default' aria-label='scroll back to top' size='small'>
        <img src={icon} alt='img' height={32} />
      </Fab>
    </ScrollTop>
  );
};

export default LiftButton;

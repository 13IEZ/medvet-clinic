import React, { FC, MouseEventHandler } from 'react';
import { StyledMainButton } from 'components/Buttons/MainButton/MainButton.style';
import { CircularProgress } from '@mui/material';

interface IMainButton {
  action: MouseEventHandler;
  title: string;
  isLoading?: boolean | undefined;
}

const MainButton: FC<IMainButton> = ({ action, title, isLoading }) => {
  return (
    <StyledMainButton
      onClick={action}
      variant='contained'
      disabled={isLoading}
      endIcon={isLoading && <CircularProgress size={30} />}
    >
      {title}
    </StyledMainButton>
  );
};

export default MainButton;

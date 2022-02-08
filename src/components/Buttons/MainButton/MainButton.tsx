import React, { FC, MouseEventHandler } from 'react';
import { StyledMainButton } from 'components/Buttons/MainButton/MainButton.style';

interface IMainButton {
  action: MouseEventHandler;
  title: string;
}

const MainButton: FC<IMainButton> = ({ action, title }) => {
  return (
    <StyledMainButton onClick={action} variant='contained'>
      {title}
    </StyledMainButton>
  );
};

export default MainButton;

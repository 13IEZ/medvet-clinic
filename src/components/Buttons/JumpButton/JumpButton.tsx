import React, { FC } from 'react';
import { StyledJumpButton } from 'components/Buttons/JumpButton/JumpButton.style';
import { Link } from 'react-router-dom';
import path_ic from 'assets/images/path-ic.png';

interface IJumpButton {
  title: string;
  path: string;
}

const JumpButton: FC<IJumpButton> = ({ title, path }) => {
  const img = <img src={path_ic} alt='path-ic' />;

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <StyledJumpButton endIcon={img} variant='text'>
        {title}
      </StyledJumpButton>
    </Link>
  );
};

export default JumpButton;

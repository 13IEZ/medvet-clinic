import React, { FC } from 'react';
import { DotProps } from 'react-multi-carousel/lib/types';
import { Grid } from '@mui/material';
import { StyledDot } from 'pages/Main/components/MainCarousel/components/CustomDots/CustomDots.style';

const CustomDots: FC<DotProps> = ({ index, active, onClick }) => {
  return (
    <Grid>
      <StyledDot active={active && active} onClick={onClick}>
        {index ? ++index : 1}
      </StyledDot>
    </Grid>
  );
};

export default CustomDots;

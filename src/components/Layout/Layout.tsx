import React, { ReactElement } from 'react';
import { Grid, Box, useMediaQuery } from '@mui/material';
import { StyledContainer } from 'style/style';
import { MarginedGrid } from './Layout.style';

interface ILayout {
  leftBlock: ReactElement;
  rightBlock: ReactElement;
}

const Layout: React.FC<ILayout> = ({ leftBlock, rightBlock }) => {
  const isWider768 = useMediaQuery('(max-width:768px)');

  return (
    <section>
      <StyledContainer maxWidth={false} width='110rem'>
        <MarginedGrid container>
          <Grid item xs={isWider768 ? 12 : 4}>
            <Box sx={{ position: 'sticky', top: 0 }}>{leftBlock}</Box>
          </Grid>
          <Grid item xs={isWider768 ? 12 : 8}>
            {rightBlock}
          </Grid>
        </MarginedGrid>
      </StyledContainer>
    </section>
  );
};

export default Layout;

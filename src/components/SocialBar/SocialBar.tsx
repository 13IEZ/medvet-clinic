import React, { FC } from 'react';
import whats_hover from 'assets/images/whats-full-hover.png';
import inst_hover from 'assets/images/inst-full-hover.png';
import { Grid, Link } from '@mui/material';
import { StyledIc } from 'components/SocialBar/SocialBar.style';
import inst_ic from 'assets/images/inst-full.png';
import whats_ic from 'assets/images/whats-full.png';

interface ISocialBar {
  inst: string;
  whatsApp: number;
}

const SocialBar: FC<ISocialBar> = ({ inst, whatsApp }) => {
  return (
    <Grid container alignItems='center' gap={5} sx={{ marginLeft: '1rem', marginTop: '2rem' }}>
      <Link target='_blank' rel='noopener' href={inst}>
        <StyledIc ic={inst_ic} icHover={inst_hover} />
      </Link>
      <Link href={`https://wa.me/${whatsApp}`} target='_blank' rel='noopener'>
        <StyledIc ic={whats_ic} icHover={whats_hover} />
      </Link>
    </Grid>
  );
};

export default SocialBar;

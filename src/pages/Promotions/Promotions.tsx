import React, { useState } from 'react';
import { Grid, useMediaQuery, Card, CardActionArea, CardMedia, Skeleton } from '@mui/material';
import { StyledSectionTitle, StyledSubTitle } from 'style/style';
import Layout from 'components/Layout/Layout';
import { promotionsApi } from 'store/services/PromotionsService/PromotionsService';
import MainButton from 'components/Buttons/MainButton/MainButton';
import ContactsFormModal from 'components/ContactsFormModal/ContactsFormModal';

const Promotions = () => {
  const {
    data: promotionsData,
    error: fetchError,
    isFetching,
  } = promotionsApi.useFetchPromotionsQuery('');
  const [isOpen, setIsOpen] = useState(false);
  const handleModalAction = (): void => setIsOpen(!isOpen);

  const isWider480 = useMediaQuery('(min-width:480px)');

  const getLeftBlockComponent = () => (
    <Grid container flexDirection='column' alignItems='center' marginBottom={isWider480 ? 3 : 2}>
      <StyledSectionTitle marginBottom={!isWider480 ? 2 : 3}>Новости и акции</StyledSectionTitle>
      <MainButton title='Записаться' action={handleModalAction} />
    </Grid>
  );

  const getRightBlockComponent = () =>
    promotionsData?.length ? (
      <Grid container spacing={2} justifyContent='center'>
        {promotionsData.map(item => (
          <Grid item lg={6} md={12} xs={12} key={item.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{ height: '100%' }}
                  onClick={handleModalAction}
                  component='img'
                  height='auto'
                  alt='promotion pic'
                  image={item.img}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    ) : (
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ height: '100%' }}
      >
        <StyledSubTitle sx={{ maxWidth: '500px' }} primary='primary'>
          В данный момент нету акций, но вы всегда можете записаться на прием :)
        </StyledSubTitle>
      </Grid>
    );

  const getFetchingView = () => (
    <Grid container spacing={2} gap={3} justifyContent='center'>
      <Skeleton variant='rectangular' width={333} height={60} />
      <Skeleton variant='rectangular' width={333} height={160} />
      <Skeleton variant='rectangular' width={333} height={260} />
    </Grid>
  );

  return (
    <>
      <Layout
        leftBlock={getLeftBlockComponent()}
        rightBlock={isFetching ? getFetchingView() : getRightBlockComponent()}
      />
      <ContactsFormModal open={isOpen} handleAction={handleModalAction} />
    </>
  );
};

export default Promotions;

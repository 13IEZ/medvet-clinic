import React, { FC, useState } from 'react';
import { StyledContainer, StyledSectionTitle } from 'style/style';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MainButton from 'components/Buttons/MainButton/MainButton';
import { Grid } from '@mui/material';
import contacts_img from 'assets/images/contacts-img.png';
import ContactsOrderFormBody from 'pages/Contacts/components/ContactsOrderForm/components/ContactsOrderFormBody/ContactsOrderFormBody';
import { notificationSlice } from 'store/reducers/NotificationSlice';
import { useAppDispatch } from 'hooks/hooks';
import axios from 'axios';
import {
  StyledContactsImg,
  StyledContactsPicHolder,
} from 'pages/Contacts/components/ContactsOrderForm/ContactsOrderForm.style';

interface IContactsFormInputs {
  name: string;
  tel: string;
  comment: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .max(60, 'Имя не должно превышать 60 символов')
      .required('Поле является обязательным'),
    tel: yup
      .string()
      .min(10, 'Не правильно указан телефонный номер (не хватает цифр)')
      .max(10, 'Введено больше символов чем необходимо')
      .required('Поле является обязательным'),
    comment: yup.string().max(360, 'Комментарий не должен превышать 120 символов'),
  })
  .required();

const ContactsOrderForm: FC = () => {
  const methods = useForm<IContactsFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', tel: '', comment: '' },
  });
  const { genNotification } = notificationSlice.actions;
  const dispatch = useAppDispatch();
  const [telState, setTelState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = methods.handleSubmit(async data => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${process.env['REACT_APP_TELEGRAM_TOKEN']}/sendMessage?chat_id=${process.env['REACT_APP_TELEGRAM_GROUP_ID']}&text=Name:+${data.name}+Tel:+${data.tel}+Comm:+${data.comment}`
      );
      setIsLoading(false);
      if (response.status === 200) {
        methods.reset();
        setTelState('');
        dispatch(
          genNotification({
            message: 'Заявка успешно отправлена! В скором времени мы с Вами свяжемся!',
            severity: 'success',
          })
        );
      }
    } catch (e) {
      setIsLoading(false);
      dispatch(
        genNotification({
          message:
            'По непредвиденным причинам заявка не была отправлена! Попробуйте позже, либо перезагрузите страницу!',
          severity: 'error',
        })
      );
    }
  });

  return (
    <section>
      <StyledContainer maxWidth={false} width='91.25rem' sx={{ marginBottom: '7rem' }}>
        <Grid
          container
          direction='row'
          justifyContent='space-around'
          alignItems='center'
          wrap='nowrap'
        >
          <StyledContactsPicHolder item xs={12}>
            <StyledContactsImg src={contacts_img} alt='contacts image' />
          </StyledContactsPicHolder>

          <Grid item xs={12}>
            <FormProvider {...methods}>
              <form>
                <StyledSectionTitle variant='h1' sx={{ textAlign: 'center' }}>
                  Запись на прием
                </StyledSectionTitle>
                <ContactsOrderFormBody telState={telState} setTelState={setTelState} />
                <Grid justifyContent='center' container>
                  <MainButton action={onSubmit} title='ОТПРАВИТЬ' isLoading={isLoading} />
                </Grid>
              </form>
            </FormProvider>
          </Grid>
        </Grid>
      </StyledContainer>
    </section>
  );
};

export default ContactsOrderForm;

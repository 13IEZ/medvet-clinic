import React, { FC } from 'react';
import { Modal, Grid, IconButton } from '@mui/material';
import { StyledModalBody } from 'components/ContactsForm/ContactsForm.style';
import close_ic from 'assets/images/close-ic.png';
import { StyledSubTitle } from 'style/style';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ContactsFormBody from 'components/ContactsForm/components/ContactsFormBody/ContactsFormBody';
import { notificationSlice } from 'store/reducers/NotificationSlice';
import axios from 'axios';
import { useAppDispatch } from 'hooks/hooks';
import MainButton from 'components/Buttons/MainButton/MainButton';

interface IContactsForm {
  open: boolean;
  handleAction: () => void;
}

interface IContactsFormInputs {
  name: string;
  tel: string;
  comment: string;
}

const schema = yup
  .object({
    name: yup
      .string()
      .max(45, 'Имя не должно превышать 45 символов')
      .required('Поле является обязательным'),
    tel: yup
      .string()
      .min(12, 'Не правильно указан телефонный номер (не хватает цифр)')
      .max(12, 'Введено больше символов чем необходимо')
      .required('Поле является обязательным'),
    comment: yup.string().max(120, 'Комментарий не должен превышать 120 символов'),
  })
  .required();

const ContactsForm: FC<IContactsForm> = ({ open, handleAction }) => {
  const methods = useForm<IContactsFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', tel: '+7', comment: '' },
  });
  const { genNotification } = notificationSlice.actions;
  const dispatch = useAppDispatch();

  const onSubmit = methods.handleSubmit(async data => {
    try {
      const response = await axios.post(
        `https://api.telegram.org/bot${process.env['REACT_APP_TELEGRAM_TOKEN']}/sendMessage?chat_id=${process.env['REACT_APP_TELEGRAM_GROUP_ID']}&text=Name:+${data.name}+Tel:+${data.tel}+Comm:+${data.comment}`
      );
      if (response.status === 200) {
        methods.reset();
        handleAction();
        dispatch(
          genNotification({
            message: 'Заявка успешно отправлена! В скором времени мы с Вами свяжемся!',
            severity: 'success',
          })
        );
      }
    } catch (e) {
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
    <FormProvider {...methods}>
      <form>
        <Modal
          open={open}
          onClose={() => {
            handleAction();
            methods.clearErrors();
          }}
        >
          <StyledModalBody>
            <Grid container justifyContent='flex-end' direction='row' alignItems='center'>
              <IconButton
                onClick={() => {
                  handleAction();
                  methods.clearErrors();
                }}
              >
                <img src={close_ic} alt='close icon' />
              </IconButton>
            </Grid>
            <StyledSubTitle sx={{ textAlign: 'center' }}>Запись на прием</StyledSubTitle>
            <ContactsFormBody />
            <Grid container justifyContent='center' sx={{ margin: '2rem 0' }}>
              <MainButton action={onSubmit} title='ОТПРАВИТЬ' />
            </Grid>
          </StyledModalBody>
        </Modal>
      </form>
    </FormProvider>
  );
};

export default ContactsForm;

import React, { FC, useState } from 'react';
import { Modal, Grid, IconButton } from '@mui/material';
import { StyledModalBody } from 'components/ContactsFormModal/ContactsFormModal.style';
import close_ic from 'assets/images/close-ic.png';
import { StyledSubTitle } from 'style/style';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ContactsFormModalBody from 'components/ContactsFormModal/components/ContactsFormModalBody/ContactsFormModalBody';
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
      .min(10, 'Не правильно указан телефонный номер (не хватает цифр)')
      .max(10, 'Введено больше символов чем необходимо')
      .required('Поле является обязательным'),
    comment: yup.string().max(120, 'Комментарий не должен превышать 120 символов'),
  })
  .required();

const ContactsFormModal: FC<IContactsForm> = ({ open, handleAction }) => {
  const methods = useForm<IContactsFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', tel: '', comment: '' },
  });
  const { genNotification } = notificationSlice.actions;
  const dispatch = useAppDispatch();
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
        handleAction();
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
                sx={{ margin: '0.2rem' }}
                onClick={() => {
                  handleAction();
                  methods.clearErrors();
                }}
              >
                <img src={close_ic} alt='close icon' />
              </IconButton>
            </Grid>
            <StyledSubTitle sx={{ textAlign: 'center' }}>Запись на прием</StyledSubTitle>
            <ContactsFormModalBody />
            <Grid container justifyContent='center' sx={{ margin: '2rem 0' }}>
              <MainButton action={onSubmit} title='ОТПРАВИТЬ' isLoading={isLoading} />
            </Grid>
          </StyledModalBody>
        </Modal>
      </form>
    </FormProvider>
  );
};

export default ContactsFormModal;

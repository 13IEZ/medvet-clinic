import React, { ChangeEventHandler, FC, useState } from 'react';
import { Grid } from '@mui/material';
import { StyledInput } from 'components/ContactsForm/ContactsForm.style';
import { useFormContext } from 'react-hook-form';

const ContactsFormBody: FC = () => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useFormContext();
  const [telState, setTelState] = useState('+7');

  const onChangeTel: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    if (e.target.value.length <= 12 && e.target.value.length >= 2 && +e.target.value) {
      setValue('tel', e.target.value);
      setTelState(getValues('tel'));
    } else {
      setValue('tel', e.target.value);
    }
  };

  return (
    <Grid
      container
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ marginTop: '2rem' }}
    >
      <StyledInput
        {...register('name')}
        label='Имя*'
        variant='outlined'
        margin='normal'
        type='text'
        color='warning'
        error={!!errors?.['name']}
        helperText={errors?.['name']?.message}
        inputProps={{ maxLength: 45 }}
      />
      <StyledInput
        {...register('tel', { maxLength: 11 })}
        label='Номер телефона*'
        variant='outlined'
        type='string'
        value={telState}
        margin='normal'
        color='warning'
        onChange={onChangeTel}
        error={!!errors?.['tel']}
        helperText={errors?.['tel']?.message}
      />
      <StyledInput
        {...register('comment')}
        label='Комментарий'
        type='text'
        margin='normal'
        inputProps={{ maxLength: 120 }}
        error={!!errors?.['comment']}
        helperText={errors?.['comment']?.message}
        multiline
        color='warning'
        minRows={3}
        maxRows={5}
      />
    </Grid>
  );
};

export default ContactsFormBody;

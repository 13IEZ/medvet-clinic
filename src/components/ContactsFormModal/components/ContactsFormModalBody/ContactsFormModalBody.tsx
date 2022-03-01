import React, { ChangeEventHandler, FC, useState } from 'react';
import { Grid, InputAdornment } from '@mui/material';
import { StyledInput } from 'components/ContactsFormModal/ContactsFormModal.style';
import { useFormContext } from 'react-hook-form';

const ContactsFormModalBody: FC = () => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useFormContext();
  const [telState, setTelState] = useState('');

  const onChangeTel: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    if (e.target.value.length <= 10 && (+e.target.value || ' ') && e.target.value !== ' ') {
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
        {...register('tel', { maxLength: 10 })}
        label='Номер телефона*'
        variant='outlined'
        type='string'
        value={telState}
        margin='normal'
        color='warning'
        onChange={onChangeTel}
        error={!!errors?.['tel']}
        helperText={errors?.['tel']?.message}
        InputProps={{
          startAdornment: <InputAdornment position='start'>+7</InputAdornment>,
        }}
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

export default ContactsFormModalBody;

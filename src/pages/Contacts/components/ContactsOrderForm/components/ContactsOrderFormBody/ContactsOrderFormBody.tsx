import React, { ChangeEventHandler, Dispatch, FC, SetStateAction } from 'react';
import { Grid, TextField, InputAdornment } from '@mui/material';
import { useFormContext } from 'react-hook-form';

interface IContactsOrderFormBody {
  telState: string;
  setTelState: Dispatch<SetStateAction<string>>;
}

const ContactsOrderFormBody: FC<IContactsOrderFormBody> = ({ telState, setTelState }) => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useFormContext();

  const onChangeTel: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    if (e.target.value.length <= 10 && (+e.target.value || ' ') && e.target.value !== ' ') {
      setValue('tel', e.target.value);
      setTelState(getValues('tel'));
    } else {
      setValue('tel', e.target.value);
    }
  };

  return (
    <Grid container alignItems='center' justifyContent='center'>
      <Grid item xs={12}>
        <TextField
          {...register('name')}
          label='Имя*'
          variant='outlined'
          margin='normal'
          type='text'
          error={!!errors?.['name']}
          helperText={errors?.['name']?.message}
          color='warning'
          fullWidth
          inputProps={{ maxLength: 60 }}
        />
        <TextField
          {...register('tel', { maxLength: 10 })}
          label='Номер телефона*'
          variant='outlined'
          type='string'
          value={telState}
          margin='normal'
          color='warning'
          fullWidth
          onChange={onChangeTel}
          error={!!errors?.['tel']}
          helperText={errors?.['tel']?.message}
          InputProps={{
            startAdornment: <InputAdornment position='start'>+7</InputAdornment>,
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          {...register('comment')}
          label='Комментарий'
          fullWidth
          type='text'
          margin='normal'
          inputProps={{ maxLength: 360 }}
          error={!!errors?.['comment']}
          helperText={errors?.['comment']?.message}
          multiline
          color='warning'
          minRows={5}
          maxRows={5}
        />
      </Grid>
    </Grid>
  );
};

export default ContactsOrderFormBody;

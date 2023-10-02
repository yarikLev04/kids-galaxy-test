import photoForAboutUs from '../../../../public/photo_for_about_us.png';
import { AppointmentFormState } from '@/types/appointment/models';
import { errorMessage } from '@/utils/formik';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { Form, FormikProvider, useFormik } from 'formik';
import Image from 'next/image';
import React, { useEffect } from 'react';
import * as Yup from 'yup';

type AppointmentFormProps = {
  serviceId: number;
};

export function AppointmentForm({ serviceId }: AppointmentFormProps) {
  const validationSchema = Yup.object({
    name: Yup.string().min(5, 'Minimum full name length 5').required('Full name is required'),
    people_amount: Yup.number().min(1, 'Minimum people amount is 1').required('People amount is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    phone: Yup.string().required('Phone is required')
  });

  const formik = useFormik<AppointmentFormState>({
    initialValues: {
      name: '',
      people_amount: 1,
      date: null,
      time: '',
      phone: '',
      message: ''
    },
    validationSchema,
    onSubmit: async values => {
      console.log(values);
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Grid container rowSpacing={2} columnSpacing={4} py={{ xs: 4, md: 14, lg: 17 }} px={{ xs: 4, md: 10, lg: 20 }}>
      <Grid item xs={6} />
      <Grid item xs={6}>
        <Typography variant={'h2'}>Personal Info </Typography>
      </Grid>
      <Grid item xs={6}>
        <Image src={photoForAboutUs} alt={'children'} style={{ width: '100%', height: 'auto', pointerEvents: 'none' }} />
      </Grid>
      <Grid item xs={6}>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={handleSubmit}>
            <Grid container columnSpacing={4} rowSpacing={2}>
              <Grid item xs={6}>
                <TextField label="Full name" fullWidth {...getFieldProps('name')} {...errorMessage(touched.name, errors.name)} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="People amount"
                  type="number"
                  fullWidth
                  variant={'outlined'}
                  disabled={formik.isSubmitting}
                  {...getFieldProps('people_amount')}
                  {...errorMessage(touched.people_amount, errors.people_amount)}
                />
              </Grid>
              <Grid item xs={6}>
                <DatePicker
                  label="Date"
                  format="dd/MM/yy"
                  views={['year', 'month', 'day']}
                  disablePast
                  disabled={formik.isSubmitting}
                  onChange={(value: any) => formik.setFieldValue('date', value)}
                  slotProps={{
                    textField: {
                      ...errorMessage(touched.date, errors.date),
                      fullWidth: true
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TimePicker
                  label="Time"
                  onChange={(value: any) => formik.setFieldValue('time', value)}
                  slotProps={{
                    textField: {
                      ...errorMessage(touched.time, errors.time),
                      fullWidth: true
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction={'column'} spacing={2}>
                  <Box>
                    <Typography variant={'body1'} mb={1} fontWeight={600}>
                      Contact Info
                    </Typography>
                    <Typography variant={'body2'}>Please note it would be used as your login and recover pass.</Typography>
                  </Box>
                  <TextField
                    label="Phone"
                    fullWidth
                    variant={'outlined'}
                    {...getFieldProps('phone')}
                    {...errorMessage(touched.phone, errors.phone)}
                  />
                  <TextField
                    label="Message"
                    fullWidth
                    variant={'outlined'}
                    multiline
                    {...getFieldProps('message')}
                    {...errorMessage(touched.message, errors.message)}
                    minRows={3}
                    inputProps={{ maxLength: 450 }}
                  />
                  <Button type={'submit'} variant={'contained'} color={'warning'}>
                    Send now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Form>
        </FormikProvider>
      </Grid>
    </Grid>
  );
}

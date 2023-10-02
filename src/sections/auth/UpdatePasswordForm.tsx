'use client';

import { errorMessage } from '@/utils/formik';
import React, { useState } from 'react';

// MUI
import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Formik and Yup
import { Form, FormikProvider, useFormik } from 'formik';
import { UpdatePasswordFormState } from '@/types/auth/formModels';
import { ValidationPatterns } from '@/utils/validationPatterns';
import * as Yup from 'yup';

const UpdatePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(state => !state);
  };

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required('Old password is required'),
    newPassword: Yup.string()
      .matches(
        ValidationPatterns.password,
        'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
      )
      .required('New password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], '')
  });

  const formik = useFormik<UpdatePasswordFormState>({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema,
    onSubmit: async values => {}
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps, resetForm } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate onSubmit={handleSubmit}>
        <Grid container justifyContent="center" spacing={2} mb={5}>
          <Grid item xs={12}>
            <TextField
              size="small"
              label="Old password"
              fullWidth
              variant="filled"
              {...getFieldProps('oldPassword')}
              {...errorMessage(touched.oldPassword, errors.oldPassword)}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              label="New password"
              fullWidth
              variant="filled"
              {...getFieldProps('newPassword')}
              {...errorMessage(touched.newPassword, errors.newPassword)}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size="small"
              label="Repeat Password"
              fullWidth
              variant="filled"
              {...getFieldProps('confirmPassword')}
              {...errorMessage(touched.confirmPassword, errors.confirmPassword)}
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Grid>
        </Grid>
        <Button fullWidth variant="contained" type={'submit'}>
          Save
        </Button>
      </Form>
    </FormikProvider>
  );
};

export default UpdatePasswordForm;

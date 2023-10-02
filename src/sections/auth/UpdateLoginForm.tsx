'use client';

import { errorMessage } from '@/utils/formik';
import React, { useState } from 'react';

// MUI
import { Button, Grid, TextField } from '@mui/material';

// Formik and Yup
import { Form, FormikProvider, useFormik } from 'formik';
import { UpdateLoginFormState } from '@/types/auth/formModels';
import * as Yup from 'yup';

const UpdatePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(state => !state);
  };

  const validationSchema = Yup.object({
    login: Yup.string().min(5, 'Minimum login length 5').required('Login is required')
  });

  const formik = useFormik<UpdateLoginFormState>({
    initialValues: {
      login: ''
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
              label="Login"
              fullWidth
              variant="filled"
              {...getFieldProps('login')}
              {...errorMessage(touched.login, errors.login)}
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

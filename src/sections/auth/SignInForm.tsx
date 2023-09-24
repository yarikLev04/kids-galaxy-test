'use client';

import { baseAppUrl } from '@/config';
import React, { useState } from 'react';

// MUI
import { Button, Container, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

// Formik and Yup
import { SignInFormState } from '@/types/auth/formModels';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

// NextAuth
import { signIn } from 'next-auth/react';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword(state => !state);
  };

  const validationSchema = Yup.object({
    login: Yup.string().min(5, 'Minimum login length 5').required('Login is required'),
    password: Yup.string().min(5, 'Minimum password length 5').required('Password is required')
  });

  const formik = useFormik<SignInFormState>({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema,
    onSubmit: async values => {
      await signIn('credentials', {
        login: values.login,
        password: values.password,
        redirect: false,
        callbackUrl: baseAppUrl
      });
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate onSubmit={handleSubmit}>
        <Container maxWidth="xs">
          <Grid container justifyContent="center" spacing={2} mb={5}>
            <Grid item xs={12}>
              <TextField
                size="small"
                label="Login"
                fullWidth
                variant="filled"
                {...getFieldProps('login')}
                error={Boolean(touched.login && errors.login)}
                helperText={touched.login && errors.login}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                label="Password"
                fullWidth
                variant="filled"
                {...getFieldProps('password')}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
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
          <Button fullWidth variant="contained" type="submit">
            Save
          </Button>
        </Container>
      </Form>
    </FormikProvider>
  );
};

export default SignInForm;

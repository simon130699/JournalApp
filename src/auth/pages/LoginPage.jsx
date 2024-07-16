import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { chekingAuthentication, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {
  const {status} = useSelector((state) => state.auth);
  const { email, onInputChange, password } = useForm({
    email: 'simon130699@gmail.com',
    password: 'simon1306'
  });

  const isAuthenticating = useMemo( () => status==='cheking',[status]);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(chekingAuthentication(email, password));
  };

  const onGoogleSignIn = () => {
    console.log('google');
    dispatch(startGoogleSignIn(email, password));

  };

  return (
    <AuthLayout title='login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type='password'
              placeholder='contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} md={6}>
              <Button type='submit' variant='contained' fullWidth disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button onClick={onGoogleSignIn} variant='contained' fullWidth disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};


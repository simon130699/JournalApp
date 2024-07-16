import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formValidations = {
  email:[ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.']
}
const formData = {
  email: '',
  password: '',
  displayName: ''
}


export const RegisterPage = () => {
  const [formSubmitted, setformSubmitted] = useState(false);
  const dispatch = useDispatch();
  const {isFormValid,displayNameValid,emailValid,passwordValid,displayName,email, onInputChange, password,formState } = useForm(formData,formValidations);
//  console.log(displayNameValid)
  const onSubmit=(e)=>{
    e.preventDefault();
      setformSubmitted(true);
      if(!isFormValid) return;
      dispatch(startCreatingUserWithEmailPassword(formState));
    }

  return (
    <AuthLayout title='Crear cuenta'>
      <h1>formValue {isFormValid ? 'valido' : 'incorrecto'} </h1>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="nombre completo"
              type='text'
              placeholder='Nombre completo'
              fullWidth
              name= "displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
            
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="correo"
              type='email'
              placeholder='correo@gmail.com'
              fullWidth
              name= "email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
            
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type='password'
              placeholder='contraseña'
              fullWidth
              name= "password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
           
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    
    </AuthLayout>
  )
}

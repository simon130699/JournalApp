import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='centrer' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='ligth'> 5 de julio 2024</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{padding:2}}>
                <SaveOutlined sx={{fontSize:'30', mr:1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='ingrese un titulo'
                label="titulo"
                sx={{border:'none',mb:1}}
            />
             <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Que paso en el dia de hoy?'
                minRows={5}
            />
        </Grid>

        <ImageGallery/>

    </Grid>
  )
}

import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { ImageGallery } from '../components/ImageGallery'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startSaveNote } from '../../store/journal/thunks'

export const NoteView = () => {

    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.journal);
   const {body,title,onInputChange,formState,date} = useForm(note);

   const dateString = useMemo(() => {
            const newDate = new Date(date);
            return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    },  [formState])
    
    const onSaveNote = () =>{
        dispatch(startSaveNote());
    }
  return (
    <Grid className='animate__animated animate__fadeIn animate__faster' 
    container direction='row'
    justifyContent='space-between'
     alignItems='centrer' 
     sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='ligth'>{dateString}</Typography>
        </Grid>
        <Grid item>
            <Button onClick={onSaveNote} color='primary' sx={{padding:2}}>
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
                name='title'
                value={title}
                onChange={onInputChange}
            />
             <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline
                placeholder='¿Que paso en el dia de hoy?'
                minRows={5}
                name='body'
                value={body}
                onChange={onInputChange}
            />
        </Grid>

        <ImageGallery/>

    </Grid>
  )
}

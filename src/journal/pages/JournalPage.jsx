import { IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal';
import { useDispatch, useSelector } from 'react-redux';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving,active: note } = useSelector(state => state.journal);

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      
      <Toolbar></Toolbar>
      {(!!note)?<NoteView />:<NothingSelectedView />} 

      
      <IconButton
        onClick={onClickNewNote}
        size='large'
        disabled={isSaving} // Deshabilita el botón si isSaving es true
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};


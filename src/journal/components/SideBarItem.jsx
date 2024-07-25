import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const SideBarItem = ({title='',body,id}) => {
    const {setActiveNote} = useSelector(state => state.journal);
    const dispatch = useDispatch();
    const onActiveNote = () =>{
        dispatch(setActiveNote());
    }
    const newTitle = useMemo(() =>{
        return title.length > 17 ?
         title.substring(0,17) + '...' :
          title;
    },[title] )
  return (
    
    <ListItem disablePadding>
    <ListItemButton onClick={onActiveNote}>
        <ListItemIcon>
            <TurnedInNot />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={ newTitle } />
            <ListItemText secondary={body} />
        </Grid>
    </ListItemButton>
</ListItem>
  )
}

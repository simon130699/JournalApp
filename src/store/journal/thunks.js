import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { adNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from './journalSlice';
import { loadNote } from '../../helpers/loadNote';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        // Aquí, en lugar de pasar el newDoc completo, pasa solo el ID del documento u otros datos serializables
        dispatch(savingNewNote());
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }


        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        // Añade el ID del documento al objeto newNote
        newNote.id = newDoc.id;

        // Despacha las acciones con los datos serializables
        dispatch(adNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));

    };
};

export const startLoadingNotes = () =>{
    return async(dispatch,getState) =>{
        const { uid } = getState().auth;
        if(!uid) throw new Error('el UID del usuario no existe');
       const notes = await loadNote(uid);
        dispatch(setNotes(notes))
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;
        const { active:note } = getState().journal;
        const noteToFireStore = {...note};
        delete noteToFireStore.id;
        const docRef = doc(FirebaseDB,`${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, {merge: true});
        
        dispatch(updateNote(note));
    }
}

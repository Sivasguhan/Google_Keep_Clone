import { createSlice, configureStore, current } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: { notes: [] },
    reducers: {
        addNote(state, action) {
            state.notes.unshift(action.payload);
        },
        deleteNote(state, action) {
            const oldNotes = current(state.notes);
            const newNotes = oldNotes.filter(note => note.id !== action.payload);
            state.notes = newNotes;
        },
        editNote(state, action) {
            const notes = current(state.notes).slice();
            notes.forEach(note =>{
                if(note.id === action.payload.id){
                    const oldNote=note;
                    const newNote={
                        ...oldNote,
                        [action.payload.name]:action.payload.value
                    };
                    notes.splice(notes.indexOf(note),1,newNote);
                }
            });
            state.notes=notes;
        }
    }
});

const store = configureStore({
    reducer: notesSlice.reducer
});

export const notesActions = notesSlice.actions;

export default store;
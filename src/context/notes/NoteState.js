import React from 'react';
import NoteContext from './NoteContext';

export default function NoteState (props){
    
    return(
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )
}
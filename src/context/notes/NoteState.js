import React, { useState } from 'react';
import NoteContext from './NoteContext';

export default function NoteState (props){
    const notesInitial = [{
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake me up early",
            "tag":"personal",
            "date": "2021-09-03",
            "_v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake me up early",
            "tag":"personal",
            "date": "2021-09-03",
            "_v": 0
        }
    ]
    const [notes,setNotes] = useState(notesInitial);
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
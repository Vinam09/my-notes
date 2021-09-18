import React, { useEffect, useState } from 'react'
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux'
import { db } from '../firebase'
import Note from './Note'

function NotesRender() {
    const user = useSelector(selectUser);

    const[notes, setNotes] = useState([]);

    const userId = db.collection('users').doc(user.uid);
    
    useEffect(()=> {
        
        userId.collection("notes").orderBy("timestamp","desc").onSnapshot(snapshot => (
            setNotes(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    },[])

    return (
        <div className ="flex xm:flex-row flex-col flex-wrap px-8 mt-16 justify-center">

            {notes.map(({id, data:{title,text}}) => (
                <Note 
                    key={id}
                    title={title}
                    text={text}
                />
            ))}
            
            {/* <Note title = "Test Note" text = "Test Text for the note Test Text for the note Test Text for the note Test Text for the note Test Text for the note"/>
            <Note title = "Test Note" text = "Test Text for the note"/>
            <Note title = "Test Note" text = "Test Text for the note"/>
            <Note title = "Test Note" text = "Test Text for the note Test Text for the note Test Text for the note Test Text for the note Test Text for the note"/> */}
        </div>
    )
}

export default NotesRender


import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Note = () => {
    const context = useContext(noteContext)
    const { notes, getNotes } = context

    useEffect(() => {
        getNotes()
    }, [])
    

    return (
        <div>
            <h2 className='my-5'>Your Current Notes</h2>
            <div className="container">
                <div className="row my-5">
                    
                    {notes.map((note) => {
                        console.log(note._id)
                        return <NoteItem key={note._id} note={note} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Note
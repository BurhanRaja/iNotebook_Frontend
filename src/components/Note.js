import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Note = () => {
    const colorComb = ["primary", "secondary", "success", "danger", "warning", "info", "dark"]
    const context = useContext(noteContext)

    const colorFunc = () => {
        for (let index = 0; index < colorComb.length; index++) {
            return colorComb[index]
        }
    }
    const { notes, setNotes } = context
    
    const colorCombination = colorComb.forEach(function colorfunc(color){
        return color
    })

    return (
        <div>
            <h2 className='my-5'>Your Current Notes</h2>
            <div className="container">
                <div className="row my-5">
                    
                    {notes.map((note) => {
                        return <NoteItem note={note} color={colorCombination} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Note
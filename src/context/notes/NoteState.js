import React, { useState } from 'react'
import noteContext from "./noteContext"

const NoteState = (props) => {
  const host = "http://localhost:5000" // backend URL
  const noteInitial = []

  const [notes, setnotes] = useState(noteInitial)

  // Get all Notes
  const getNotes = async () => {
    // For server side
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "authentication-token": localStorage.getItem('token')
      }
    })

    // For client side
    const jsonNotes = await response.json()
    setnotes(jsonNotes)
  }

  // Add a Note
  const addNote = async (title, description, tags) => {
    // For server side
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "authentication-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tags })
    });

    // For client side
    setnotes(notes.concat(await response.json()))
  }

  // Delete Note
  const deleteNote = async (id) => {
    // For server side delete
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "authentication-token": localStorage.getItem('token')
      }
    })
    // eslint-disable-next-line
    const json = response.json()

    // returning the notes not equal to the id 
    // For client side delete
    const newNote = notes.filter((note)=>{return note._id !== id})
    setnotes(newNote)
  }

  // Update Note
  const updateNote = async (id, title, description, tags) => {
    // For server side 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "authentication-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tags })
    });

    // eslint-disable-next-line
    const json = await response.json()


    // For Client side
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tags = tags
        break;
      }
    }
    setnotes(newNotes)
  }

  return (
    <noteContext.Provider value={{ notes, setnotes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
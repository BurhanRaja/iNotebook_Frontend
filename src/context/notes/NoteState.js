import React, { useState } from 'react'
import noteContext from "./noteContext"

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const noteInitial = []

  const [notes, setnotes] = useState(noteInitial)

  // Add Note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "authentication-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQ1YzcwN2QzOTUzNjI2MzA4NDQwIn0sImlhdCI6MTY1NjMwNTMzNH0.UC4rvlU_PjnCGU6AeNX7j1Xzp9TwUX4D_aW3bnfo2Xw"
      }
    })

    const jsonNotes = await response.json()
    setnotes(jsonNotes)
  }

  // Add Note
  const addNote = async (title, description, tags) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "authentication-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQ1YzcwN2QzOTUzNjI2MzA4NDQwIn0sImlhdCI6MTY1NjMwNTMzNH0.UC4rvlU_PjnCGU6AeNX7j1Xzp9TwUX4D_aW3bnfo2Xw"
      },
      body: JSON.stringify({ title, description, tags })
    });

    setnotes(notes.concat(await response.json()))
  }

  // Delete Note
  const deleteNote = async (id) => {
    // For server side delete
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "authentication-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQ1YzcwN2QzOTUzNjI2MzA4NDQwIn0sImlhdCI6MTY1NjMwNTMzNH0.UC4rvlU_PjnCGU6AeNX7j1Xzp9TwUX4D_aW3bnfo2Xw"
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
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "authentication-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJiMzQ1YzcwN2QzOTUzNjI2MzA4NDQwIn0sImlhdCI6MTY1NjMwNTMzNH0.UC4rvlU_PjnCGU6AeNX7j1Xzp9TwUX4D_aW3bnfo2Xw"
      },
      body: JSON.stringify({ title, description, tags })
    });

    // eslint-disable-next-line
    const json = await response.json()

    // Cannot update setnotes directly using notes
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
    <noteContext.Provider value={{ notes, addNote, deleteNote, updateNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
import noteContext from "./noteContext"
import React from 'react'

const NoteState = (props) => {
  const state = {
    "name": "Burhan",
    "class": "5b"
  }
  return (
    <noteContext.Provider value={state}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
import noteContext from "./noteContext"
import React from 'react'

const NoteState = (props) => {
  return (
    <noteContext.Provider value={{"state":"state"}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
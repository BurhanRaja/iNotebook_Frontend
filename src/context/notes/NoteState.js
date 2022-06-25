import React, { useState } from 'react'
import noteContext from "./noteContext"

const NoteState = (props) => {
  const noteInitial = [
    {
      "_id": "62b4003c06626cd58010d00c",
      "user": "62b345c707d3953626308440",
      "title": "My title",
      "description": "Please I have to wake up early and study",
      "tags": "selfimprovement",
      "date": "2022-06-23T05:55:08.292Z",
      "__v": 0
    },
    {
      "_id": "62b400c806626cd58010d01a",
      "user": "62b345c707d3953626308440",
      "title": "My Work title",
      "description": "I have to work till 8:00 PM",
      "tags": "work",
      "date": "2022-06-23T05:57:28.831Z",
      "__v": 0
    },
    {
      "_id": "62b4003c06626cd58010d00c1",
      "user": "62b345c707d3953626308440",
      "title": "My title",
      "description": "Please I have to wake up early and study",
      "tags": "selfimprovement",
      "date": "2022-06-23T05:55:08.292Z",
      "__v": 0
    },
    {
      "_id": "62b400c806626cd58010d01a2",
      "user": "62b345c707d3953626308440",
      "title": "My Work title",
      "description": "I have to work till 8:00 PM",
      "tags": "work",
      "date": "2022-06-23T05:57:28.831Z",
      "__v": 0
    },
    {
      "_id": "62b4003c06626cd58010d00c3",
      "user": "62b345c707d3953626308440",
      "title": "My title",
      "description": "Please I have to wake up early and study",
      "tags": "selfimprovement",
      "date": "2022-06-23T05:55:08.292Z",
      "__v": 0
    },
    {
      "_id": "62b400c806626cd58010d01a4",
      "user": "62b345c707d3953626308440",
      "title": "My Work title",
      "description": "I have to work till 8:00 PM",
      "tags": "work",
      "date": "2022-06-23T05:57:28.831Z",
      "__v": 0
    },
  ]

  const [notes, setnotes] = useState(noteInitial)


  
  return (
    <noteContext.Provider value={{notes, setnotes}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
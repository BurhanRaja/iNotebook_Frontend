import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

const Note = (props) => {

    const {showAlerts} = props
    let navigate = useNavigate()

    // using context api from "../context"
    const context = useContext(noteContext)

    // Fetching function to fetchAllNotes, updateNotes from "../context/note/NoteState"
    const { notes, getNotes, updateNote } = context
    
    // All Notes render it on the client side
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            navigate("/login")
        }
    }, [])

    // Using it to open the edit modal to update the note
    const ref = useRef(null)

    // Using it to close after update is submitted
    const refClose = useRef(null)

    // Using useState to pass the data to update it
    const [note, setNote] = useState({eid:"", etitle:"", edescription:"", etags:""})

    // To update the noteItem on client side
    const updateNoteMethod = (currentnote) => {
        ref.current.click()
        setNote({eid: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etags: currentnote.tags})
    }
    
    // To update note on server side
    const handleupdateNote = () => {
        updateNote(note.eid, note.etitle, note.edescription, note.etags)
        showAlerts("Note has been updated", "success")
        refClose.current.click()
    }

    // To edit form
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }


    return (
        <div>
            <button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update Your Note</h5>
                            <button ref={refClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="form-floating">
                                    <input type="text" className="form-control" name='etitle' id="etitle" placeholder="title" 
                                    style={{ "borderBottomLeftRadius": "1px", "borderBottomRightRadius": "1px" }} 
                                    onChange={onChange} value={note.etitle} />
                                    <label htmlFor="title">Title</label>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="edescription" name='edescription' 
                                    style={{ "height": "200px", "borderTop": "none", "borderTopLeftRadius": "1px", "borderTopRightRadius": "1px" }} 
                                    onChange={onChange} value={note.edescription}></textarea>
                                    <label htmlFor="description">Desciption Here</label>
                                </div>
                                <h4 className='my-3'>Tag</h4>
                                <div className="mb-3">
                                    <input type="text" className="form-control py-1" id="etags" name='etags' placeholder="eg: Work, Personal.." onChange={onChange} value={note.etags}/>
                                    <small>You can also add Multiple tags. For example:- Work | Personal | Travel</small>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleupdateNote} type="button" className="btn btn-success">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='mt-5 mb-4 text-center'>Your Current Notes</h2>
            <div className="container">
                <div className="row my-3">
                    <div className='text-center' style={{"fontWeight":"bold", "fontSize":"17px"}}>
                    {notes.length===0 && 'No Notes to display'}
                    </div>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} showAlerts={showAlerts} note={note} updateNoteMethod={updateNoteMethod} showAlert={props.showAlert} />
                    })}

                </div>
            </div>
        </div>
    )
}

export default Note
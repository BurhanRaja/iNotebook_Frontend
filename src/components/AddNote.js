import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tags: "" })

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleAddNote = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tags)
        setNote({ title: "", description: "", tags: "" })
    }

    return (
        <>
            <h1 className='text-center'>Add Your Note</h1>
            <form className='my-3'>
                <div className="form-floating">
                    <input type="text" className="form-control" name='title' id="title" placeholder="title"
                        style={{ "borderBottomLeftRadius": "1px", "borderBottomRightRadius": "1px" }}
                        onChange={onChange}
                        value={note.title} />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="description" name='description'
                        style={{ "height": "200px", "borderTop": "none", "borderTopLeftRadius": "1px", "borderTopRightRadius": "1px" }}
                        onChange={onChange}
                        value={note.description} ></textarea>
                    <label htmlFor="description">Desciption Here</label>
                </div>
                <h4 className='my-3'>Tag</h4>
                <div className="mb-3">
                    <input type="text" className="form-control py-1" id="tags" name='tags' placeholder="eg: Work, Personal.." onChange={onChange} value={note.tags} />
                    <small>You can also add Multiple tags. For example:- Work | Personal | Travel</small>
                </div>

                <div className='text-center my-5' >
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="button" style={{ "width": "50%" }} onClick={handleAddNote} className="btn btn-success px-5 py-2">Add</button>
                </div>
            </form>
        </>
    )
}

export default AddNote
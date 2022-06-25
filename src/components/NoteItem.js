
import React from 'react'

const NoteItem = (props) => {
    const {note} = props
    return (
        <div className='col-md-4 my-2'>
            <div className="card border-dark mb-3">
                <div className='d-flex flex-row-reverse'>
                    <button type="button" className="btn btn-sm"><box-icon name='trash'></box-icon></button>
                    <button type="button" className="btn btn-sm"><box-icon name='edit-alt'></box-icon></button>
                </div>
                <div className="card-body pt-0">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                </div>
                <hr className='hr hr-dark' />
                <h6 className='mx-3'><span className="badge bg-danger" style={{ "fontSize": "13px" }}>{note.tags}</span></h6>
            </div>
        </div>
    )
}

export default NoteItem

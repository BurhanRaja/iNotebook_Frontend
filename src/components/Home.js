import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Home = () => {
    const tags = ["Work", "Personal", "School", "Travel"]
    const context = useContext(noteContext)
    const {notes, setNotes} = context
    return (
        <div>
            <div className='container my-5'>
                <h1>Add Your Note</h1>
                <form className='my-3'>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="title" style={{ "borderBottom": "none", "borderBottomLeftRadius": "1px", "borderBottomRightRadius": "1px" }} />
                        <label for="floatingInput">Title</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ "height": "200px", "borderTop": "none", "borderTopLeftRadius": "1px", "borderTopRightRadius": "1px" }}></textarea>
                        <label for="floatingTextarea">Desciption Here</label>
                    </div>
                    <h4 className='my-3'>Tags</h4>
                    <div className='d-flex'>
                        {tags.map((tag) => {
                            return <div className="form-check mx-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    {tag}
                                </label>
                            </div>
                        })}
                        <div className="form-check mx-2 d-flex">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label for="inputAddress" className="form-label mx-2 my-0">Other:</label>
                            <input type="text" className="form-control py-1" id="inputAddress" placeholder="eg: Food" style={{ "width": "80%" }} />
                        </div>
                    </div>
                </form>

                <h2 className='my-5'>Your Current Notes</h2>
                {notes.map((note) => {
                    return note.title
                })}
            </div>
        </div>
    )
}

export default Home

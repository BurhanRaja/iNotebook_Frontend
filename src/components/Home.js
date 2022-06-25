import React from 'react'
import Note from './Note'

const Home = () => {
    return (
        <div>
            <div className='container my-5'>
                <h1 className='text-center'>Add Your Note</h1>
                <form className='my-3'>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="title" style={{  "borderBottomLeftRadius": "1px", "borderBottomRightRadius": "1px" }} />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ "height": "200px", "borderTop": "none", "borderTopLeftRadius": "1px", "borderTopRightRadius": "1px" }}></textarea>
                        <label htmlFor="floatingTextarea">Desciption Here</label>
                    </div>
                    <h4 className='my-3'>Tags</h4>
                        <div className="mb-3">
                            <input type="text" className="form-control py-1" id="inputAddress" placeholder="eg: Work, Personal.." />
                            <small>You can also add Multiple tags. For example:- Work | Personal | Travel</small>
                        </div>

                    <div className='text-center my-5' >
                        <button type="button" style={{"width":"50%"}} className="btn btn-success px-5 py-2">Add</button>
                    </div>
                </form>
                <Note />
            </div>
        </div>
    )
}

export default Home

import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const Home = () => {
    return (
        <div>
            <div className='container my-5'>
                <AddNote />
                <Note />
            </div>
        </div>
    )
}

export default Home

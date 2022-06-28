import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const Home = (props) => {
    const {showAlerts} = props
    return (
        <div>
            <div className='container my-5'>
                <AddNote showAlerts={showAlerts}/>
                <Note showAlerts={showAlerts} />
            </div>
        </div>
    )
}

export default Home

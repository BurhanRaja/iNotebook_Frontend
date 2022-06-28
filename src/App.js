import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {


  const [alerts, setAlerts] = useState(null);

  // Show Alerts and assign setAlerts to some value
  const showAlerts = (messages, types) => {
    setAlerts({
      message: messages,
      type: types
    })
    // Time for alerts
    setTimeout(() => {
      setAlerts(null)
    }, 1500);
  }
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alerts} />
          <Routes>
            <Route exact path='/' element={<Home showAlerts={showAlerts} /> } />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/signUp' element={<SignUp showAlerts={showAlerts} />} />
            <Route exact path='/login' element={<Login showAlerts={showAlerts} />} />
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}


export default App;

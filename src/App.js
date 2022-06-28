import React from 'react';
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
  return (
    <div>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/signUp' element={<SignUp />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}


export default App;

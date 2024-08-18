import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';

import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


const App = () =>{
  return (
    <div>
          <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/exercise/:id" element={<ExerciseDetail/>} />  
    </Routes>
    <Footer/>
    </div> 
  )
}

export default App;
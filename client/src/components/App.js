import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Thoughts from './Thoughts/Thoughts';
import About from './About';
import Contact from './Contact';
import Reviews from './Reviews/Reviews';
import Progress from './Progress';
import { Route,Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';


function App() {

  return (
    <body>
      <div>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/progress" element={<Progress/>}/>
      <Route path="/thoughts" element={<Thoughts/>}/>
      </Routes>
      
      <Footer />
    </div>
    </body>
    
  )
}

export default App
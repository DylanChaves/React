import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Regritro from '../pages/Regritro';
import Contact from '../pages/Contact';
const Routing =() => {
  return (
         <Router>
            <Routes>
                <Route path='/' element={<Regritro/>} />
                <Route path='Registro' element={<Contact/>} />
            </Routes>
        </Router>
  );
};

export default Routing

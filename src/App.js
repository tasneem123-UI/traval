import './App.css';
import Home from './compontent/Home';

import Navbar from './compontent/Navbar';
import { toursList } from "./compontent/Date";
import Tours from './compontent/Tours';
import SortInput from './compontent/Sortinput';
import { useState } from 'react';
import Baner from './compontent/Baner';
import New from './compontent/New';
import Fooder from './compontent/Fooder';
import Login from './compontent/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './compontent/Register';
import About from './compontent/About';
import Tourid from './compontent/Tourid';
function App() {




  return (
   
      <BrowserRouter >
  <Navbar />
 <Routes>

      <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
      <Route path='/login' element={<Login />}  />
        <Route path='/Register' element={<Register  />}  />
    
         <Route path='/tour/:id' element={<Tourid/>}  />
 </Routes>
     
  
  <Fooder/>
</BrowserRouter>
   
  );
}

export default App;
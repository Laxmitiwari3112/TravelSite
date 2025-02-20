import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>

    {/* <Route path='/' element={...}></Route> */}
    <Route path='/' element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App

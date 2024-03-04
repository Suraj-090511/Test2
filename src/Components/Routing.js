// Routing.js

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Changes from '../Pages/Changes';
import Protected from './Protected';

function Routing() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route element = {<Protected isauth={false} />}>
            <Route element={<Changes/>} path='/Changes'/>
            </Route>
        </Routes>

        <NavigateFn />

        <h1>hello Routing</h1>
      </BrowserRouter>
    </>
  );
}

const NavigateFn = () => {
  return (
    <>
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Changes">Changes</Link>
    </>
  );
};

export default Routing;

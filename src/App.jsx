import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './Components/First';
import Home from './Components/Home';
import Bollywood from './Pages/Bollywood';
import Hollywood from './Pages/Hollywood';
import HindiDubbed from './Pages/HindiDubbed';
import South from './Pages/South';
import Webseries from './Pages/Webseries';
import Adult from './Pages/Adult';
import Downlode from "./Pages/Downlode";
import Layout from "./Layout";   // ✅ new layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Index />} />

        {/* Nested routes inside Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="bollywood" element={<Bollywood />} />
          <Route path="hollywood" element={<Hollywood />} />
          <Route path="hindidubbed" element={<HindiDubbed />} />
          <Route path="south" element={<South />} />
          <Route path="webseries" element={<Webseries />} />
          <Route path="adult" element={<Adult />} />
          <Route path="downlode" element={<Downlode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

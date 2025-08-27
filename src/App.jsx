import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';       // ✅ new landing page
import Index from './Components/First';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import Bollywood from './Pages/Bollywood';
import Hollywood from './Pages/Hollywood';
import HindiDubbed from './Pages/HindiDubbed';
import South from './Pages/South';
import Webseries from './Pages/Webseries';
import Adult from './Pages/Adult';
import Downlode from "./Pages/Downlode"
import Header from "./Components/Header";
import Group from "./Navigate/Group"
import Download from "./Navigate/Download"

import Disclaimer  from "./Navigate/Disclaimer"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="bollywood" element={<Bollywood />} />
                <Route path="hollywood" element={<Hollywood />} />
                <Route path="hindidubbed" element={<HindiDubbed />} />
                <Route path="south" element={<South />} />
                <Route path="webseries" element={<Webseries />} />
                <Route path="adult" element={<Adult />} />
                <Route path="Downlode" element={<Downlode/>}/>
                <Route path='Group' element={<Group/>}></Route>
                <Route path='Download' element={<Download/>}></Route>
                <Route path='Disclaimer' element={<Disclaimer />}></Route>
                 <Route path="*" element={<Home />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

// Components
import Index from './Components/First';
import Home from './Components/Home';
import Footer from "./Components/Footer";
import Header from "./Components/Header";

// Pages
import Bollywood from './Pages/Bollywood';
import Hollywood from './Pages/Hollywood';
import HindiDubbed from './Pages/HindiDubbed';
import South from './Pages/South';
import Webseries from './Pages/Webseries';
import Adult from './Pages/Adult';
import Downlode from "./Pages/Downlode";
import MovieDetail from "./Movies/MovieDetail";   // ✅ Import movie detail page

// Navigate
import Group from "./Navigate/Group";
import Download from "./Navigate/Download";
import Request from "./Navigate/Request";
import Disclaimer  from "./Navigate/Disclaimer";

// Genres
import Action from './Genral/Action';
import Comedy from './Genral/Comedy';
import Drama from './Genral/Drama';
import Horror from './Genral/Horror';
import Romance from './Genral/Romance';
import SciFi from './Genral/SciFi';
import Thriller from './Genral/Thriller';

// ✅ Layout Component (Header + Footer wrapper)
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Index />} />

        {/* All other pages wrapped with Header + Footer */}
        <Route element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="bollywood" element={<Bollywood />} />
          <Route path="hollywood" element={<Hollywood />} />
          <Route path="hindidubbed" element={<HindiDubbed />} />
          <Route path="south" element={<South />} />
          <Route path="webseries" element={<Webseries />} />
          <Route path="adult" element={<Adult />} />
          <Route path="downlode" element={<Downlode />} />
          <Route path="group" element={<Group />} />
          <Route path="download" element={<Download />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="request" element={<Request />} />
          <Route path="thriller" element={<Thriller />} />
          <Route path="scifi" element={<SciFi />} />
          <Route path="romance" element={<Romance />} />
          <Route path="horror" element={<Horror />} />
          <Route path="drama" element={<Drama />} />
          <Route path="comedy" element={<Comedy />} />
          <Route path="action" element={<Action />} />

          {/* ✅ Movie detail dynamic route */}
          <Route path="movie/:id" element={<MovieDetail />} />

          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import  '../Home/Home.css'
import { FaFire } from "react-icons/fa";
import Movie1 from "../../Movies/Movie1.jsx"
function Home() {
  return (
    <>

      <div className="latest-navbar mt-3">
        <div className="container">
          <h3> <FaFire/>    Latest Releases</h3>
        </div>
      </div>
      <div className="movies">
          <Movie1/>
      </div>
    </>
  );
}

export default Home;

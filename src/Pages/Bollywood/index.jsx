import React from 'react'
import Button from "../../Components/Button/index.jsx"
import "./Bolly.css"
import { PiFolderSimpleFill } from "react-icons/pi";
import Bollymovie from "../Bollywood/Bollymovie.jsx"
function Index() {
  return (
    <>
      <Button/>  
      <div className="latest-navbar mt-3">
        <div className="container">
          <h3><PiFolderSimpleFill/>             Bollywood</h3>
        </div>
        <div className="movies">
          <Bollymovie/>
        </div>
      </div>
      
    </>
  )
}

export default Index

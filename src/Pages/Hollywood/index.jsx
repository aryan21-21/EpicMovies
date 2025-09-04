import React from 'react'
import Button from "../../Components/Button/index.jsx"
// import "./Holly.css"
import { PiFolderSimpleFill } from "react-icons/pi";
import Hollymovie from "../Hollywood/Hollymovie.jsx"
function Index() {
  return (
    <>
      <Button/>  
      <div className="latest-navbar mt-1">
        <div className="container">
          <h3><PiFolderSimpleFill/>           Hollywood</h3>
        </div>
        <div className="movies">
          <Hollymovie/>
        </div>
      </div>
      
    </>
  )
}

export default Index

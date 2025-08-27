import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { FaArrowCircleDown } from "react-icons/fa";
import "./App.css"
function index() {
  return (
  <>
    <Button></Button>
    <div className="container">
        <h3><FaArrowCircleDown/>        How To Download ?</h3>
    </div>
    <div className="movies">
        <h2>Watch The Video, To Easily Download Any Content From Site 🙂</h2>
    </div>
    <video width="640" height="360" controls className='video'>
        <source src="/videos/Demo.mp4" type="video/Demo" />
        Your browser does not support the video tag.
    </video>
  </>
  )
}

export default index

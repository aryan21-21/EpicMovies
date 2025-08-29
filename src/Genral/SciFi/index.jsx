import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Scifi from "../SciFi/Scifi.jsx";
function index() {
  return (
    <>
        <Button/>
        <div className="container">
          <h3><PiFolderSimpleFill/>             SciFi</h3>
        </div>
         <div className="movies">
          <Scifi/>
        </div>
    </>
  )
}

export default index

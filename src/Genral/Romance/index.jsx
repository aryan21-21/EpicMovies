import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Romance from "../Romance/Romance.jsx"
function index() {
  return (
    <>
        <Button/>
        <div className="container">
          <h3><PiFolderSimpleFill/>             Romance</h3>
        </div>
         <div className="movies">
          <Romance/>
        </div>
    </>
  )
}

export default index

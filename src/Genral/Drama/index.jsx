import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Drama from "../Drama/Drama.jsx"
function index() {
  return (
    <>
        <Button/>
        <div className="container">
          <h3><PiFolderSimpleFill/>             Drama</h3>
        </div>
         <div className="movies">
          <Drama/>
        </div>
    </>
  )
}

export default index

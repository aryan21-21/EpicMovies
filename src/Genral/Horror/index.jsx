import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Horror from "./Horror.jsx"
function index() {
  return (
    <>
        <Button/>
        <div className="container">
          <h3><PiFolderSimpleFill/>             Horror</h3>
        </div>
         <div className="movies">
          <Horror/>
        </div>
    </>
  )
}

export default index

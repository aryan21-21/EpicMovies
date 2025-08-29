import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Comedy from "../Comedy/Comedy.jsx"
function index() {
  return (
    <>
        <Button/>
        <div className="container">
          <h3><PiFolderSimpleFill/>             Comedy</h3>
        </div>
         <div className="movies">
          <Comedy/>
        </div>
    </>
  )
}

export default index

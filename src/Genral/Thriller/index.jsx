import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Thriller from "../Thriller/Thriller.jsx"
function index() {
  return (
    <>
        <Button/>
        <div className="container">
          <h3><PiFolderSimpleFill/>             Thriller</h3>
        </div>
         <div className="movies">
          <Thriller/>
        </div>
    </>
  )
}

export default index

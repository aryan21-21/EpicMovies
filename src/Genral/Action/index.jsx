import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Action from "../Action/Action.jsx"
function index() {
  return (
    <>
        <Button/>
        <div className="container">
          <h3><PiFolderSimpleFill/>             Action</h3>
        </div>
         <div className="movies">
          <Action/>
        </div>
    </>
  )
}

export default index

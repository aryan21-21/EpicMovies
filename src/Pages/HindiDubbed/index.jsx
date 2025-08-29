import React from 'react'
import { PiFolderSimpleFill } from "react-icons/pi";
import Button from "../../Components/Button/index.jsx"
import HindiDubbed from "../../Pages/HindiDubbed/HindiDubbed.jsx"
function index() {
  return (
    <>  
      <Button></Button>
      <div className="container">
        <h3><PiFolderSimpleFill/>     HindiDubbed</h3>
      </div>
      <div className="movies">
        <HindiDubbed/>
      </div>
    </>
  )
}

export default index

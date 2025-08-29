import React from 'react'
import { PiFolderSimpleFill } from "react-icons/pi";
import Button from "../../Components/Button/index.jsx"
import Adult from "../../Pages/Adult/Adult.jsx"
function index() {
  return (
    <>  
      <Button></Button>
      <div className="container">
        <h3><PiFolderSimpleFill/>     Gujrati</h3>
      </div>
       <div className="movies">
          <Adult/>
        </div>
    </>
  )
}

export default index

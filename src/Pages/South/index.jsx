import React from 'react'
import { PiFolderSimpleFill } from "react-icons/pi";
import Button from "../../Components/Button/index.jsx"
import South from "../../Pages/South/South.jsx"
function index() {
  return (
    <>  
      <Button></Button>
      <div className="container">
        <h3><PiFolderSimpleFill/>     SouthHindi</h3>
      </div>
       <div className="movies">
          <South/>
        </div>
    </>
  )
}

export default index

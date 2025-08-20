import React from 'react'
import Button from "../../Components/Button/index.jsx"
import { PiFolderSimpleFill } from "react-icons/pi";
import Webseries from "../Webseries/Webseries.jsx"
function Index() {
  return (
    <>
      <Button/>  
      <div className="latest-navbar mt-3">
        <div className="container">
          <h3><PiFolderSimpleFill/>        Webseries</h3>
        </div>
        <div className="movies">
          <Webseries/>
        </div>
      </div>
      
    </>
  )
}

export default Index

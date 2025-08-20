import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import "./Button.css"
function Index() {
  return (
    <>
      <div className="homepage-btn-container">
        <a href="/home">
          <button className="homepage-btn">
            Go to HomePage <IoHomeOutline />
          </button>
        </a>
      </div>
    </>
  )
}

export default Index

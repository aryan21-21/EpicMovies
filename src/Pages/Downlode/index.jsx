import React from 'react'
import { MdFileDownload } from "react-icons/md";
import Button from "../../Components/Button/index.jsx"
import "../Downlode/index.css"
function index() {
  return (
    <>
        <Button/>  
        <div className="latest-navbar mt-3">
            <div className="container">
                <h3><MdFileDownload/>Download</h3>
            </div>
            <div class="movie-card">
                <img src="https://image.tmdb.org/t/p/w400/vPTYtKuV8X5uUd3SqnzO14W6Dti.jpgs" alt="Sultan Poster" />
                <a href="#" class="download-btn">Download</a>
            </div>
        </div>
    </>
  )
}
export default index;

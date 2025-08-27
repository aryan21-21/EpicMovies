import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import Button from "../../Components/Button/index.jsx"
import "./Group.css";

function index() {
  return (
    <>
    <Button/>  
    <div className="latest-navbar mt-1">
        <div className="container">
            <h3><FaLocationArrow/>        Join Our Group !</h3>
        </div>
        <div className="movies">
            <span className="tag">Join EpicMovie TeleGram Channel”</span>
            <h3 className='notic mt-3'>U Can Join Our Official TeleGram Channel For Instant Updates!</h3>
            <img src="https://myimg.click/images/2021/02/24/83e02460-telegram-1.jpg" alt="telgram" className='imge mt-3'/>
            <a href="https://t.me/+gbVTBY7biTM4ZjM9" className='mt-3'>
                <span className='link mt-5'>➤Click Here To join➤</span>
            </a>
            <h6>We have also Opened our new list site with name EpicMovie.com  Here you will get all list of EpicMovie official site and news related to any updates</h6>
        </div>
    </div>    
    </>
  )
}

export default index

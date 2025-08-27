import React from 'react'
import Button from "../../Components/Button/index.jsx"
import "./app.css"
function index() {
    // try {
    //   const res = await fetch('http://localhost/contact-api/submit.php', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await res.text();
    //   alert(data);
    // } catch (error) {
    //   alert('Error sending data');
    //   console.error(error);
    // }
  return (
   <>
   
    <Button/>
     <div className="container">
        <h3>Movie Request Page</h3>
    </div>
    <div className="tab">
        <h4>Kindly search on our site before making a request.</h4>
        <h5 className='line'>Make Request Down in  Forms !!!</h5>
    </div>
    <div className="request">
        <form action="Movie.php" method='post'>
            <input type="text" name="movie" placeholder='Enter Your Movie name*' required className='mt-3'/><br />
            <input type="email" name="email" placeholder='Enter Your Emali*' required className='mt-3'/><br />
            <button type='submit' className='mt-3'>Post Movie Request</button>
        </form>
    </div>
   </>
  )
}

export default index

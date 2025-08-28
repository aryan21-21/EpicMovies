import React, { useState } from 'react'
import Button from "../../Components/Button/index.jsx"
import "./app.css"

function Index() {
  const [movie, setMovie] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/MovieRequest/Movie.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({ movie, email })
      });

      const text = await response.text();
      setMessage(text); // show response from PHP
    } catch (error) {
      setMessage("❌ Error connecting to server");
    }
  };

  return (
    <>
      <Button/>
      <div className="container">
        <h3>Movie Request Page</h3>
      </div>
      <div className="tab">
        <h4>Kindly search on our site before making a request.</h4>
        <h5 className='line'>Make Request Down in Forms !!!</h5>
      </div>
      <div className="request">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="movie"
            placeholder="Enter Your Movie name*"
            required
            className="mt-3"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
          /><br />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email*"
            required
            className="mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />

          <button type="submit" className="mt-3">Post Movie Request</button>
        </form>

        {/* ✅ Show PHP response here */}
        {message && <p className='message'>{message}</p>}
      </div>
    </>
  )
}

export default Index

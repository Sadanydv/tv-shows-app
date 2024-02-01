import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ShowDetails.css";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    const movieDetails = {
      name: show.name,
      summary: show.summary,
    };

    sessionStorage.setItem("movieDetails", JSON.stringify(movieDetails));
    navigate("/ticket");
  };

  return (
    <div className="DetailContainer">
      <div className="InnerContainer">
        <h2>{show.name}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: show.summary }}
          className="para"
        />
        <button onClick={handleBookTicket}>Book Movie Ticket</button>
        <br />
        <Link to="/">Back to Shows List</Link>
      </div>
    </div>
  );
};

export default ShowDetails;

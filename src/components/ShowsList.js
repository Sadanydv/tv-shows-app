import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ShowsList.css';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className='container'>
      <h2>TV Shows</h2>
      <div className='shows-container'>
        {shows.map((show) => (
          <Link key={show.show.id} to={`/show/${show.show.id}`} className='link'>
            <div className='show-item'>
              <img src={show.show.image?.medium} alt={show.show.name} />
              <div>
                <h3>{show.show.name}</h3>
                <p>{show.show.type}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShowsList;

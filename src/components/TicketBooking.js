// TicketBooking.js
import React, { useState } from "react";
import "./TicketBooking.css";

const TicketBooking = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const movieDetails = JSON.parse(sessionStorage.getItem("movieDetails"));

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store form data in local storage
    const bookingDetails = {
      movieDetails,
      userDetails,
      timestamp: new Date().toISOString(),
    };
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Add logic for ticket booking here
    console.log("Ticket booked!", bookingDetails);

    // Clear sessionStorage after booking
    sessionStorage.removeItem("movieDetails");
  };

  return (
    <div className="ticketMainContainer">
      <div className="ticketContainer">
        <h2>Book Movie Ticket</h2>
        <p>Movie: {movieDetails?.name}</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Address:
            <textarea
              name="address"
              value={userDetails.address}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default TicketBooking;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "../redux/action";
import './Tickets.css'
import Nobookings from "../../components/video & images/empty-Booking.avif";

export default function Tickets() {
  const bookingData = useSelector((state) => state.bookHotel.bookingData);
  const dispatch = useDispatch();

  const handleCancelBooking = () => {
    dispatch(cancelBooking());
  };

  return (
    <div className="my-tickets">
      <h2>My Tickets</h2>
      {bookingData.length !== 0 &&
        bookingData.map((booking, index) => (
          <div key={index}>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Check-in Date: {booking.checkInDate}</p>
            <p>Check-out Date: {booking.checkOutDate}</p>
            <button onClick={() => handleCancelBooking(booking.id)}>
              Cancel Booking
            </button>
          </div>
        ))}
      {bookingData.length == 0 && (
        <div className="no-bookings">
          <img className="no-bookings-img" src={Nobookings}></img>
          <div>
            <h1>
              Looks empty, you've no upcoming bookings.
              <p>When you book a trip, you will see your itinerary here.</p>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

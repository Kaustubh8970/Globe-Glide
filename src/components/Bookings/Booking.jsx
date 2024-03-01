import React, { useState } from 'react';
import './Booking.css'
import { NavLink } from 'react-router-dom';
import { bookHotel } from '../redux/action';
import { useDispatch } from 'react-redux';

const DummyHotel = ({ hotelName }) => {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleBookClick = () => {
        setIsOpen(true);
    };

    const handleBookHotel = (e) => {
        e.preventDefault();
        
        const bookingData = {
            name,
            email,
            checkInDate,
            checkOutDate
        };

        dispatch(bookHotel(bookingData))
        setIsOpen(false); // Close the booking window after booking
    };

    return (
        <div className="dummy-hotel">
            <div className="dummy-hotel-container">
                <div className="bookticks">
                    <h3>{hotelName}</h3>
                    <h3>Price: $60 per night</h3>
                    <button onClick={handleBookClick} className='btn'>Book</button>
                </div>
                {isOpen && (
                    <div className="booking-window">
                        <h4>Book Hotel {hotelName}</h4>
                        <form onSubmit={handleBookHotel}>
                            <label>Name:</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label>Check-in Date:</label>
                            <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
                            <label>Check-out Date:</label>
                            <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
                            <NavLink to='/success'><button type="submit" >Book Hotel</button></NavLink>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DummyHotel;

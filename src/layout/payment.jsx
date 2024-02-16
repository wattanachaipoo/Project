// ReservationTable.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReservationTable() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8889/reservation/show')
      .then(response => {
        setReservations(response.data.reservations);
      })
      .catch(error => {
        console.error('Error retrieving reservations:', error);
      });
  }, []);

  return (
    <div className='bg-white'>
      <h2>Reservation Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Guests</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>User ID</th>
            <th>Room Number</th>
            <th>Room Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation.id}>
              <td>{reservation.id}</td>
              <td>{reservation.number_of_guests}</td>
              <td>{reservation.start_date}</td>
              <td>{reservation.end_date}</td>
              <td>{reservation.userId}</td>
              <td>{reservation.number}</td>
              <td>{reservation.room_type}</td>
              <td>{reservation.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationTable;

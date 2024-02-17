import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReservationTable() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const response = await axios.get("http://localhost:8889/reservation/history");
        const reservationsArray = Array.isArray(response.data.reservations)
          ? response.data.reservations
          : []; // หากไม่ใช่อาร์เรย์จะกำหนดเป็น []
        
        setReservations(reservationsArray);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    
    fetchReservations();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // เพิ่มเงื่อนไขการเช็คว่า reservations เป็น array หรือไม่ และมีข้อมูลหรือไม่
  if (!Array.isArray(reservations) || reservations.length === 0) {
    return <div>No reservations available.</div>;
  }

  return (
    <div className="bg-[url('/img/reser.jpg')] h-screen bg-cover flex justify-center items-center">
    <div className="bg-cover min-h-screen flex justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md w-6/6 rounded-lg overflow-hidden">
        <div className="text-3xl mb-5 text-center font-bold text-black">ประวัติการจองของคุณ</div>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">ID</th> */}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">จำนวนคนเข้าพัก</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">จองตั้งแต่วันที่</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">สิ้นสุด</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">User ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">เลขห้อง</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">ประเภทห้อง</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">ราคา</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map(reservation => (
              <tr key={reservation.id} className="bg-white border-b border-gray-200">
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{reservation.id}</td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.number_of_guests}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.start_date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.end_date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.number}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.room_type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{reservation.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
    <div className="flex items-center justify-between form-control w-full max-w-xs mx-auto">
            <a href="/" className=" bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">ย้อนกลับ</a>
          </div>
      </div>
    </div>
  </div>
  
  

  )
          }
export default ReservationTable;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReservationTable() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editIndex, setEditIndex] = useState(null);
    const [originalReservations, setOriginalReservations] = useState([]);

    useEffect(() => {
        async function fetchReservations() {
            try {
                const response = await axios.get("http://localhost:8889/reservation/show");
                const reservationsArray = Array.isArray(response.data.reservations)
                    ? response.data.reservations
                    : [];

                setReservations(reservationsArray);
                setOriginalReservations(reservationsArray);
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

    if (!Array.isArray(reservations) || reservations.length === 0) {
        return <div>No reservations available.</div>;
    }

    return (
        <div className="bg-[url('https://www.phuketmoderncurtain.com/wp-content/uploads/2017/08/6.1.jpg')] h-screen bg-cover flex justify-center items-center">
            <div className="bg-cover min-h-screen flex justify-center items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="p-5 w-10/10 mx-auto rounded-lg bg-white">
                    <div className="text-3xl mb-5 text-center font-bold text-black">ใบเสร็จในการจอง</div>
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">จำนวนคนเข้าพัก</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">จองตั้งแต่วันที่</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">สิ้นสุด</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">User ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">เลขห้อง</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">ประเภทห้อง</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">ราคา</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-[150px]">แก้ไข</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((reservation, index) => (
                                <tr key={reservation.id} className="bg-white border-b border-gray-200">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                value={reservation.number_of_guests}
                                                className='bg-white'
                                                onChange={(e) => handleInputChange(e, 'number_of_guests')}
                                            />
                                        ) : (
                                            reservation.number_of_guests
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {editIndex === index ? (
                                            <input
                                                type="date"
                                                className='bg-white'
                                                value={reservation.start_date}
                                                onChange={(e) => handleInputChange(e, 'start_date')}
                                            />
                                        ) : (
                                            new Date(reservation.start_date).toLocaleDateString()
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {editIndex === index ? (
                                            <input
                                                type="date"
                                                className='bg-white'
                                                value={reservation.end_date}
                                                onChange={(e) => handleInputChange(e, 'end_date')}
                                            />
                                        ) : (
                                            new Date(reservation.end_date).toLocaleDateString()
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {editIndex === index ? (
                                            <span>{reservation.userId}</span>
                                        ) : (
                                            reservation.userId
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                className='bg-white'
                                                value={reservation.number}
                                                onChange={(e) => handleInputChange(e, 'number')}
                                            />
                                        ) : (
                                            reservation.number
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                className='bg-white'
                                                value={reservation.room_type}
                                                onChange={(e) => handleInputChange(e, 'room_type')}
                                            />
                                        ) : (
                                            reservation.room_type
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {editIndex === index ? (
                                            <input
                                                type="text"
                                                className='bg-white'
                                                value={reservation.price}
                                                onChange={(e) => handleInputChange(e, 'price')}
                                            />
                                        ) : (
                                            reservation.price
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button><a href='/editroom'>แก้ไข</a></button>
                                    </td>

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
    );
}

export default ReservationTable;

import React, { useState } from 'react';
import axios from 'axios';

const UpdateReservationForm = () => {
  const [formData, setFormData] = useState({
    number_of_guests: '',
    start_date: '',
    end_date: '',
    number: '',
    room_type: '',
    price: ''
  });
  const [message, setMessage] = useState('');
  const [roomImage, setRoomImage] = useState(''); // เพิ่ม state สำหรับรูปภาพห้อง

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'start_date' || name === 'end_date') {
      // Convert date to yyyy-MM-dd format
      const isoDate = new Date(value).toISOString().split('T')[0];
      setFormData((prevData) => ({ ...prevData, [name]: isoDate }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const hdlRoomSelect = e => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value })); // อัพเดทค่าใน formData
    // เปลี่ยนรูปภาพตามที่เลือก
    switch (e.target.value) {
      case 'standard':
        setRoomImage('https://www.zazahotel2019.com/wp-content/uploads/2019/09/1bed.png');
        break;
      case 'deluxe':
        setRoomImage('https://media.onyx-hospitality.com/-/media/project/amari/common/property/pattaya/hotel-photos/stay/deluxe-ocean-view/deluxe-ocean-view-king-1.jpg?rev=-1');
        break;
      case 'suite':
        setRoomImage('https://blog.amari.com/wp-content/uploads/2020/01/executive-suite-ocean-view-2.jpg');
        break;
      default:
        setRoomImage('');
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8889/reservation/mo', formData);
      const data = response.data;
      setMessage(data.msg);
    } catch (error) {
      setMessage('มีข้อผิดพลาดเกิดขึ้น');
      console.error('Error updating reservation:', error);
    }
  };

  return (
    <div className="bg-[url('https://png.pngtree.com/background/20230617/original/pngtree-stylish-hotel-suite-with-a-contemporary-3d-rendered-luxury-bedroom-and-picture-image_3704763.jpg')] h-screen bg-cover">
      <div className="bg-cover min-h-screen flex justify-center items-center">
        <form
          className="bg-white shadow-md px-8 pt-6 pb-8 w-3/6 rounded-lg"
          onSubmit={handleSubmit}
          method="post"
        >
          <div className="text-3xl mb-5 text-center font-bold text-black">แก้ไขข้อมูลการจอง</div>
          <div className="mb-4 form-control w-full max-w-xs mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_date">
              จองตั้งแต่วันที่
            </label>
            <input
              className="input input-bordered w-full max-w-xs bg-white text-black"
              id="start_date"
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 form-control w-full max-w-xs mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_date">
              สิ้นสุด
            </label>
            <input
              className="input input-bordered w-full max-w-xs bg-white text-black"
              id="end_date"
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 form-control w-full max-w-xs mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number_of_guests">
              จำนวนคนเข้าพัก
            </label>
            <input
              className="input input-bordered w-full max-w-xs bg-white text-black"
              id="number_of_guests"
              type="text"
              name="number_of_guests"
              value={formData.number_of_guests}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 form-control w-full max-w-xs mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
              เลือกเลขห้องใหม่
            </label>
            <select
              className="input input-bordered w-full max-w-xs bg-white text-black"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            >
              <option value="">โปรดเลือก</option>
              <option value="230">230</option>
              <option value="240">240</option>
              <option value="250">250</option>
              <option value="260">260</option>
              <option value="270">270</option>
            </select>
          </div>
          <div className="mb-4 form-control w-full max-w-xs mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="room_type">
              ประเภทห้อง
            </label>
            <select
              className="input input-bordered w-full max-w-xs bg-white text-black"
              id="room_type"
              name="room_type"
              value={formData.room_type}
              onChange={hdlRoomSelect}
            >
              <option value="">โปรดเลือก</option>
              <option value="standard">มาตรฐาน</option>
              <option value="deluxe">ดีลักซ์</option>
              <option value="suite">สวีท</option>
            </select>
          </div>
          {roomImage && (
              <div className="flex justify-center">
                <img src={roomImage} alt="Room" className="max-w-xs mx-auto" />
              </div>
            )}
          <div className="mb-4 form-control w-full max-w-xs mx-auto">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              ราคา
            </label>
            <select
              className="input input-bordered w-full max-w-xs bg-white text-black"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            >
              <option value="">โปรดเลือก</option>
              <option value="1000">1,000 บาท</option>
              <option value="2000">2,000 บาท</option>
              <option value="3000">3,000 บาท</option>
            </select>
          </div>
          <div className="flex items-center justify-between form-control w-full max-w-xs mx-auto">
            <button
              className=" bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            > บันทึก
            </button>
            <a href="/edit" className=" bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">ย้อนกลับ</a>
          </div>
          {message && <p className='text-green-500'>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default UpdateReservationForm;

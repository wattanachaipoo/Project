import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserHome() {
  const [todos, setTodos] = useState([]);
  // const [editIdx, setEditIdx] = useState(-1)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:8889/reservation", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(rs.data.todos);
    };
    run();
  }, [trigger]);

  return (
    <div className="bg-[url('/img/homebg.jpg')] h-screen bg-cover">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-4">
          <div className="text-center text-2xl text-blue-500"></div>
          <Link to="/nom" className=" bg-green-300 text-3xl w-2/6 min-w-[600px] h-2/6 min-h-[100px] text-white flex justify-center items-center rounded-full">จองที่พัก/จองห้อง</Link>
          <Link to="/edit" className=" bg-orange-500 text-3xl w-2/6 min-w-[600px] h-2/6 min-h-[100px] text-white flex justify-center items-center rounded-full">แก้ไขห้องพัก</Link>
          <Link to="/pay" className=" bg-sky-400 text-3xl w-2/6 min-w-[600px] h-2/6 min-h-[100px] text-white flex justify-center items-center rounded-full">ใบเสร็จ</Link>
          <Link to="/his" className=" bg-slate-500 text-3xl w-2/6 min-w-[600px] h-2/6 min-h-[100px] text-white flex justify-center items-center rounded-full">ประวัติการจอง</Link>

        </div>
      </div>
    </div>
  );
}

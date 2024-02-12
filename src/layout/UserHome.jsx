import axios from "axios";
import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import ModalEdit from "../components/ModalEdit";
import { Link } from "react-router-dom";

export default function UserHome() {
  const [todos, setTodos] = useState([]);
  // const [editIdx, setEditIdx] = useState(-1)
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    const run = async () => {
      let token = localStorage.getItem("token");
      const rs = await axios.get("http://localhost:8889/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(rs.data.todos);
    };
    run();
  }, [trigger]);

  // const openModal = (id) => {
  //   let idx = todos.findIndex(el => el.id === id)
  //   setEditIdx(idx)
  //   document.getElementById("my_modal_2").showModal()
  // }

  // const closeModal = () => {
  //   document.getElementById("my_modal_2").close()
  // }

  return (
    <div class="bg-[url('/img/homebg.jpg')] h-screen bg-cover">
      <div class="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-4">
          <div className="text-center text-2xl text-blue-500"></div>
          {/* <ModalEdit el={todos[editIdx]} closeModal={closeModal} setTrigger={setTrigger}/>
      <div className="flex flex-col gap-4">
        {todos.map((el) => (
          <TodoCard key={el.id} el={el} openModal={openModal} setTrigger={setTrigger}/>
        ))}
      </div> */}
      <Link to="/nom" className=" bg-green-300 text-3xl w-2/6 min-w-[600px] h-2/6 min-h-[100px] text-white flex justify-center items-center rounded-full">จองที่พัก/จองห้อง</Link>
      <Link to="/new" className=" bg-yellow-300 text-3xl w-2/6 min-w-[600px] h-2/6 min-h-[100px] text-white flex justify-center items-center rounded-full">เช็คอิน/เช็คเอ้าท์</Link>
      <Link to="/new" className=" bg-sky-200 text-3xl w-2/6 min-w-[600px] h-2/6 min-h-[100px] text-white flex justify-center items-center rounded-full">ประวัติการจอง</Link>

        
            {/* <Link to="/new" className="text-white">จองที่พัก/จองห้อง</Link> */}



        </div>
      </div>
    </div>
  );
}

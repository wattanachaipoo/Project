import axios from "axios";
import { useState, useEffect } from "react";

export default function Modal(props) {
  const { el, closeModal, setTrigger } = props;
  const [input, setInput] = useState({
    title: "",
    dueDate: "",
    status: "",
  });
  const [status, setStatus] = useState([])
  
  useEffect( ()=>{
    if(status.length) { return }
    const run = async () => {
      const token = localStorage.getItem('token')
      const rs = await axios.get('http://localhost:8889/todos/all-status', {
        headers: {Authorization : `Bearer ${token}`}
      })
      setStatus(rs.data.status)
    }
      run()
  }, [])

  useEffect(() => {
    setInput({
      title: el?.title ?? "",
      dueDate: new Date(el?.dueDate ?? null).toISOString().split("T")[0],
      status: el?.status ?? "",
    });
  }, [el?.id]);

  const hdlChange = (e) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      const output = { ...input, dueDate: new Date(input.dueDate) };
      const token = localStorage.getItem("token");
      const rs = await axios.put(`http://localhost:8889/todos/${el.id}`, output, {
        headers : { Authorization : `Bearer ${token}`}
      })
      console.log(rs)
      setTrigger(prv => !prv)
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <form className="flex flex-col border rounded w-5/6 mx-auto p-4 gap-4" onSubmit={hdlSubmit}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Todo title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              name="title"
              value={input.title}
              onChange={hdlChange}
            />
          </label>
          <label className="form-control w-full max-w-[220px] ">
            <div className="label">
              <span className="label-text">Due Date</span>
            </div>
            <input type="date" name="dueDate" value={input.dueDate} onChange={hdlChange} />
          </label>
          <select className="select select-bordered w-full max-w-xs"
            name = 'status'
            value = {input.status}
            onChange={hdlChange}
          >
            { status.map( el => (
              <option key={el} value={el}>{el}</option>
            ))}
          </select>
          <button type='submit' className="btn btn-info" onClick={closeModal}>
            Submit
          </button>
          <button type='button' className="btn btn-info" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

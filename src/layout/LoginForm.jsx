import axios from 'axios'
import { useState } from "react";
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const { setUser } = useAuth()
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const hdlChange = e => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      const rs = await axios.post('http://localhost:8889/auth/login', input)
      console.log(rs.data.token)
      localStorage.setItem('token', rs.data.token)
      const rs1 = await axios.get('http://localhost:8889/auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
      })
      console.log(rs1.data)
      setUser(rs1.data)

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div class="bg-[url('/img/bg.png')] h-screen bg-cover">
      <div class="flex justify-center items-center h-screen">
      <div class="p-5  w-2/6 min-w-[600px] mx-auto rounded-lg bg-white">
        <div class="text-3xl mb-5 text-center font-bold text-black">LOGIN</div>
          <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
            <label class="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text text-black">username</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs bg-white text-black"
                name="username"
                value={input.username}
                onChange={hdlChange}
              />
            </label>

            <label class="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text text-black">password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs bg-white text-black"
                name="password"
                value={input.password}
                onChange={hdlChange}
              />
            </label>
            <br></br>
            <p className=' text-center font-bold text-black '>
              You don't have an account?
            </p>
            <Link to ="/register" className='text-center text-green-400'>Register</Link>

            <div class="flex justify-center mt-7">
              <button type="submit" class="btn btn-success text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

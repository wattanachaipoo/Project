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

  const handleChange = e => {
    setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // ตรวจสอบว่ามีการกรอกข้อมูลครบถ้วนหรือไม่
      if (!input.username || !input.password) {
        alert('Please enter username and password.')
        return
      }

      // ทำการล็อกอิน
      const response = await axios.post('http://localhost:8889/auth/login', input)
      const { token } = response.data

      // เก็บ token ลงใน localStorage
      localStorage.setItem('token', token)

      // รับข้อมูลผู้ใช้จากเซิร์ฟเวอร์
      const userResponse = await axios.get('http://localhost:8889/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setUser(userResponse.data)
    } catch (error) {
      console.error('Login error:', error.message)
    }
  }

  return (
    <div className="bg-[url('/img/bg.png')] h-screen bg-cover">
      <div className="flex justify-center items-center h-screen">
        <div className="p-5 w-2/6 min-w-[600px] mx-auto rounded-lg bg-white">
          <div className="text-3xl mb-5 text-center font-bold text-black">LOGIN</div>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text text-black">Username</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs bg-white text-black"
                name="username"
                value={input.username}
                onChange={handleChange}
              />
            </label>

            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text text-black">Password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs bg-white text-black"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </label>

            <p className='text-center font-bold text-black'>
              Don't have an account?
              <Link to="/register" className='text-green-400 ml-1'>Register</Link>
            </p>

            <div className="flex justify-center mt-7">
              <button type="submit" className="btn btn-success text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import axios from 'axios'
import {useState} from "react";
import { Link } from 'react-router-dom';

export default function RegisterForm() {
  const [input, setInput] = useState({
    username : '', 
    password : '',
    confirmPassword : '',
    email : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
    <div className="bg-[url('/img/bg.png')] h-screen bg-cover">
      <div className="flex justify-center items-center h-screen">
        <div className="p-5 border w-3/6 min-w-[600px] mx-auto rounded-lg bg-white">
          <div className="text-3xl mb-5 text-center font-bold text-black">Register Form</div>
          <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">username</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs bg-white text-black"
                name="username"
                value={input.username}
                onChange={ hdlChange }
              />
            </label>
            <label className="form-control w-full max-w-xs mx-auto bg-white text-black">
              <div className="label">
                <span className="label-text">E-mail</span>
              </div>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs  bg-white text-black"
                name="email"
                value={input.email}
                onChange={ hdlChange }
              />
            </label>
            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs bg-white text-black"
                name="password"
                value={ input.password }
                onChange={ hdlChange }
              />
            </label>
            <label className="form-control w-full max-w-xs mx-auto">
              <div className="label">
                <span className="label-text">Confirm Password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs bg-white text-black "
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={ hdlChange }
              />
            </label>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-success text-white mt-4">Register</button>
            </div>
            <p className=' text-center font-bold text-black mt-4'>
              You have an account?
              <Link to ="/" className='text-center text-green-600 ml-3'>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

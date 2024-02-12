import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: 'Login' },
  { to: '/register', text: 'Register' },
]

const userNav = [
]

export default function Header() {
  const { user, logout } = useAuth()
  const finalNav = user?.id ? userNav : guestNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar bg-slate-200 bg-opacity-80">
      <div className="flex-1">
        <div className="avatar w-100 h-16">
            <img src="./img/logo.png" />
        </div>
        <a href="/" className="text-xl inline-flex items-center text-black ml-4">
          ยินดีตอนรับเข้าสู่ Blue Service Hotel
        </a>
      </div>

      <div className="flex-none">
        <div className="flex-1">
          <a href="#" className="text-xl inline-flex items-center text-black">
            {user?.id ? user.username : ''}
          </a>
        </div>
        <ul className="menu menu-horizontal px-1">
          {finalNav.map(el => (
            <li key={el.to} className='text-black'>
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          {user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout} className='text-black '>Logout</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

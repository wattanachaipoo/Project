import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: 'Login' },
  { to: '/register', text: 'Register' },
];

const userNav = [];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : guestNav;
  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/" className="text-white flex justify-center items-center rounded-full text-xl">Home</Link></li>
            <li><Link to="/nom" className="text-white flex justify-center items-center rounded-full text-xl">จองที่พัก/จองห้อง</Link></li>
            <li><Link to="/edit" className="text-white flex justify-center items-center rounded-full text-xl">แก้ไขห้องพัก</Link></li>
            <li><Link to="/pay" className="text-white flex justify-center items-center rounded-full text-xl">ใบเสร็จ</Link></li>
            <li><Link to="/his" className="text-white flex justify-center items-center rounded-full text-xl">ประวัติการจอง</Link></li>
            <li><a onClick={hdlLogout} className="text-white flex justify-center items-center rounded-full text-xl">Logout</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <a href="/" className="btn btn-ghost text-xl">Blue Service Hotel</a>
      </div>

      <ul className="menu menu-horizontal px-1">
        {finalNav.map(el => (
          <li key={el.to} className="text-black">
            <Link to={el.to}>{el.text}</Link>
          </li>
        ))}
        {user?.id && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Profile" src="https://i.pngimg.me/thumb/f/720/m2i8m2d3K9K9A0K9.jpg" />
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
}

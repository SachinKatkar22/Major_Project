import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <nav className="fixed w-full z-50 p-6 flex justify-around items-center text-black bg-white">
    <div className="text-2xl font-bold">AXIS</div>
    <div className="space-x-6">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link> 
      <Link to='/contact'>Contact</Link>
    </div>
  </nav>
    </div>
  );
}

export default Header

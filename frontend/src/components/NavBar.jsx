import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center  bg-white border-2 p-2">
      <Link to="/">
        {/* <img
          src={''}
          alt="Logo"
          className="w-12 h-12 mx-5"
        /> */}
        <p className=' '>PRIME FIT</p>
      </Link>
      <div className="flex gap-10 text-lg">
        <Link
          to="/"
          className="text-brown-900  border-red-600 hover:text-red-600"
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="text-brown-900  border-red-600 hover:text-red-600"
        >
          Exercises
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

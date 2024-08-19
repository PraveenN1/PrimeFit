import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex mx-36 my-8 items-center justify-center border-2 p-2 backdrop-blur-md space-x-40 bg-slate-200 rounded-full absolute w-[80%] ">
      <Link to="/">
        {/* <img
          src={''}
          alt="Logo"
          className="w-12 h-12 mx-5"
        /> */}
        <p className='font-bold px-5 py-1 border-2 absolute left-2 top-1 border-red-600 rounded-full'>PRIME FIT</p>
      </Link>
      <div className="flex gap-10 text-lg font-semibold">
        <Link
          to="/"
          className="border-red-600 hover:text-red-600"
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

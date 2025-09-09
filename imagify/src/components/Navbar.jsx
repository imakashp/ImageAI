import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { user, setShowLogin, logout } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-4 sm:px-8 shadow-md">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className="w-28 sm:w-32 lg:w-40"
        />
      </Link>

      {/* Right side */}
      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Credits Button */}
            <button
              onClick={() => navigate('/buy')}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 rounded-full hover:scale-105 transition-all duration-300"
            >
              <img className="w-5" alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left : {user.credit}
              </p>
            </button>

            {/* Greeting */}
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>

            {/* Profile Dropdown */}
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow cursor-pointer"
                alt="profile"
              />

              {/* Dropdown menu */}
              <div className="absolute hidden group-hover:block top-12 right-0 z-10 text-black rounded">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm shadow-lg">
                  <li
                    onClick={logout}
                    className="py-1 px-4 cursor-pointer hover:bg-gray-100 rounded"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate('/buy')}
              className="cursor-pointer hover:underline"
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white px-7 py-2 text-sm rounded-full hover:bg-zinc-700 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {FaBarsStaggered, FaXmark} from "react-icons/fa6"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-jobs", title: "Post A Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <img
            className="joblogo"
            src="https://static.vecteezy.com/system/resources/previews/038/693/348/non_2x/job-search-creative-icon-design-vector.jpg"
            alt=""
          />
          <span>Job Portal</span>
        </a>
              {/* { working for nav items for large devices} */}
      <ul className="hidden md:flex gap-12">
        {navItems.map(({ path, title }) => (
          <li key={path} className="text-base text-primary ">
            <NavLink
              to={path}
              className={({ isActive}) =>
                isActive ? "active" : ""
              }
            >
              {title}
            </NavLink> 
          </li>
        ))}
      </ul>
      {/* creating signup and login btn */}
      <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
        <Link to="/login" className="py-2 px-5 border rounded">Login</Link>
        <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">sign up</Link>
      </div>
      {/* creating response */}
      <div className="md:hidden block ">
        <button onClick={handleMenuToggler}>
            {
                isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/> :<FaBarsStaggered className="w-5 h-5 text-primary"/>
            }
        </button>
      </div>
      </nav>
    
    {/* creating navitems in  mobile response */}
    <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}>
        <ul>
        {navItems.map(({ path, title }) => (
          <li key={path} className="text-base text-white first:text-white py-1 ">
            <NavLink
              to={path}
              className={({ isActive}) =>
                isActive ? "active" : ""
              }
            >
              {title}
            </NavLink> 
          </li>
        ))}
      <li className="text-white py-1"> <Link to="/login" >Login</Link></li>
        </ul>
    </div>
    </header>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import {useAuth} from '../../store/auth'

interface Props {
  className?: string;
  props: string;
}

const Navbar = () => {

  const {isLoggedIn, user} =  useAuth();
  let isAdmin= false;

  if(user.email == import.meta.env.VITE_ADMIN_MAIL){
    isAdmin=true;
    console.log("isAdmin", isAdmin);
    
  }else{
    isAdmin=false;
  }

  

 return (
    <div className="bg-[#494CF4] text-lg">

      {/* //wrapper container */}
      <div className="flex justify-between items-center h-20">


          {/* //logo */}
          <div className="flex items-center mx-5 text-5xl navbar-logo">
            <NavLink to="/" className="">
              Logo
            </NavLink>
          </div>


          {/* //Links */}
          <div className=" mx-2 px-2 navbar-links">
            <nav>
              <ul className="flex gap-4">
              {isAdmin ? <><li>
                  <NavLink to="/admin" className=' md:block lg:block'>Admin</NavLink>
                </li></> : null }
                <li>
                  <NavLink to="/" className=' md:block lg:block'>About</NavLink>
                </li>
                <li>
                  <NavLink to="/service" className="hidden lg:block">Services</NavLink>
                </li>
                {
                isLoggedIn ? 
                <>
               
                <li>
                  <NavLink to="/logout" className="hidden lg:block">Logout</NavLink>
                </li>
            </> : 
                <>
                <li className="">
                  <NavLink to="/login">Login</NavLink>
                </li>

                <li className="md:hidden  lg:block">
                  <NavLink to="/signup">Signup</NavLink>
                </li>
                </>}
                

               
                <li>
                  <NavLink to="/contact" className="hidden md:hidden lg:block">Contact</NavLink>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
    
    </div>
  );
};

export default Navbar;

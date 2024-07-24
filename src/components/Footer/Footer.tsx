import React from 'react'
import { NavLink } from 'react-router-dom';



const Footer = () => {
  return (
    <div className=''>
    <footer className="h-10 bg-sky-500 flex w-full flex-wrap items-center justify-center border-t text-center md:justify-between bottom-0 fixed" >
      <NavLink to="" color="blue-gray" className="font-normal">
        &copy; Created by Ankit.B
      </NavLink >
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <NavLink 
            
            to="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </NavLink >
        </li>
        <li>
          <NavLink 
            
            to="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </NavLink >
        </li>
        <li>
          <NavLink 
            to="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </NavLink >
        </li>
      </ul>
    </footer>
    </div>
  );
}

export default Footer;
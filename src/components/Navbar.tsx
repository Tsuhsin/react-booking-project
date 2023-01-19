import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Clock from './practice/Clock'

const Navbar = () => {
  return (
    <div className=' fixed top-0 w-full bg-gray-100 text-gray-800 py-4 flex justify-center z-10'>
      <div className=' w-5/6 flex justify-between items-center relative font-Poppins font-medium text-sm md:text-base'> 
        <div className=' flex gap-4'>
          <Link to="/" className=" ml-2 font-bold">Logo</Link>
          <Clock />
        </div>
        <input type="checkbox" name="" id="navbarToggle" className=" hidden peer" />
        <label htmlFor="navbarToggle" className=" sm:hidden">
          <FontAwesomeIcon icon={faBars} className=' text-black' />
        </label>
        <div className=' 
          absolute hidden peer-checked:flex flex-col gap-4
          top-8 left-1/2 -translate-x-1/2 pb-4 
          bg-gray-100 w-screen shadow-bottom
          sm:static sm:flex sm:flex-row sm:top-auto sm:right-0 
          sm:translate-x-0 sm:pb-0 sm:w-auto
          sm:shadow-none sm:overflow-visible'>
          <div className=' flex flex-col items-center gap-4 font-semibold sm:flex-row sm:flex'>
            <Link to="/">Home</Link>
            <div>About</div>
            <div>Contact</div>
            <Link to="/todolist">TodoList</Link>
          </div>
          <div className=' mx-2 flex justify-center'>
            <button className=' btn-black'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
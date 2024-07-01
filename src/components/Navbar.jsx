import React, { useState } from 'react';
import { IoPersonCircle, IoMenu, IoCloseCircleSharp } from "react-icons/io5";
import { Link } from 'react-scroll';

const Navbar = () => {
  const [change, setChange] = useState(false);
  const navItem = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  const offsetValue = -120; // Adjust this value to fine-tune the scroll position

  return (
    <>
      <div className='h-[120px] w-full px-4 md:px-20 bg-gradient-to-r from-slate-500 to-yellow-100 flex items-center cursor-pointer border-b border-gray-300 fixed left-0 right-0 top-0 z-10'>
        <div className='flex justify-between w-full'>
          <div className='flex items-center gap-2'>
            <span className='text-3xl'><IoPersonCircle /></span>
            <h1 className='font-bold'>Rasik,</h1>
            <p>WEB DEVELOPER</p>
          </div>
          <div>
            <ul className='hidden md:flex gap-6 font-semibold text-xl'>
              {navItem.map(({ id, text }) => (
                <li className='hover:scale-125 transition-all' key={id}>
                  <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={offsetValue}
                        activeClass='active'>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setChange(!change)} className='md:hidden cursor-pointer'>
              {change ? <IoCloseCircleSharp size={25} /> : <IoMenu size={25} />}
            </div>
          </div>
        </div>
      </div>
      {change && (
        <div className='flex flex-col items-center justify-center font-semibold text-xl bg-gradient-to-r from-slate-500 to-yellow-100 fixed inset-0 z-20'>
          <ul className='flex flex-col items-center gap-4'>
            {navItem.map(({ id, text }) => (
              <li className='hover:scale-150 transition-all' key={id}>
                <Link to={text}
                      smooth={true}
                      duration={500}
                      offset={offsetValue}
                      onClick={() => setChange(false)}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

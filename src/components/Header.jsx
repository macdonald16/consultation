import { useState } from 'react';
import logo from '../assets/logo01.png';
import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-full px-4 py-4 bg-[#071952]">
      <div className="w-11/12 mx-auto flex justify-between items-center text-center px-2">
        <img src={logo} alt="Logo" style={{ width: '180px', height: 'auto' }} />

        {/* Mobile Menu */}
        <div className="lg:hidden">
          {!isMenuOpen ? (
            <HiOutlineMenuAlt1
              size={35}
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HiOutlineX
              size={35}
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex gap-8 text-white">
            <li className="relative group">
              Our Expertise
              <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 py-2 bg-white border text-black border-gray-300 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 grid grid-cols-3 gap-4">
                <li className="px-4 py-2">Agriculture</li>
                <li className="px-4 py-2">Expertise Option 2</li>
                <li className="px-4 py-2">Expertise Option 3</li>
              </ul>
            </li>
            <li className="relative group">
              Gen-ius Insights
              <ul className="absolute left-0 transform wsmt-2 py-2 bg-white bg-contain text-black border border-gray-300 rounded-lg shadow-md opacity-0 invisible
              
               group-hover:opacity-100 group-hover:visible duration-300 grid grid-cols-3 gap-4 w-screen">
                <div className='flex'>
                  <div className=''>
                    <li className="px-4 py-2">Insights Option 1</li>
                    <li className="px-4 py-2">Insights Option 2</li>
                    <li className="px-4 py-2">Insights Option 3</li>
                  </div>
                  <div className=''>
                    <li className="px-4 py-2">Insights Option 1</li>
                    <li className="px-4 py-2">Insights Option 2</li>
                    <li className="px-4 py-2">Insights Option 3</li>
                  </div>
                  <div className=''>
                    <li className="px-4 py-2">Insights Option 1</li>
                    <li className="px-4 py-2">Insights Option 2</li>
                    <li className="px-4 py-2">Insights Option 3</li>
                  </div>
                </div>
              </ul>
            </li>
            <li className="">About Genesis</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="ml-4 gap-8">
          <button className="border border-[#000] px-2 text-black bg-[#F4CE14]">Sign Up</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col gap-4 text-white">
            <li className="px-4 py-2">Our Expertise</li>
            <li className="px-4 py-2">Gen-ius Insights</li>
            <li className="px-4 py-2">About Genesis</li>
            <li className="px-4 py-2">Contact Us</li>
          </ul>
          <button className="border border-[#000] mt-8 px-2 text-black bg-[#F4CE14]">Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Header;
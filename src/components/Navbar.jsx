import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const navLinks = [
        { label: 'Home', to: 'home' },
        { label: 'About', to: 'about' },
        { label: 'Experience', to: 'experience' },
        { label: 'Skills', to: 'skills' },
        { label: 'Work', to: 'work' },
        { label: 'Contact', to: 'contact' },
    ];

    return (
        <div className='fixed w-full h-[80px] font-serif text-xl flex justify-center items-center px-4 bg-[#1a1a1adc] text-yellow-400 z-50 backdrop-blur-sm'>

            <ul className='hidden md:flex gap-x-6'>
                {navLinks.map(({ label, to }) => (
                    <li key={to} className='hover:text-yellow-300 transition-colors duration-200'>
                        <Link to={to} smooth={true} duration={50}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-[#1a1a1af0] flex flex-col justify-center items-center'
                }
            >
                {navLinks.map(({ label, to }) => (
                    <li key={to} className='py-6 text-4xl'>
                        <Link onClick={handleClick} to={to} smooth={true} duration={500}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Social icons — all unified dark grey bg */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] rounded-t-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='mailto:abhishekpanigrahi2244@gmail.com'
                        >
                            <span className='mr-2'>Email</span> <HiOutlineMail size={28} className='text-yellow-400' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='https://www.linkedin.com/in/abhishek-panigrahi-71b412220/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span className='mr-2'>Linkedin</span> <FaLinkedin size={28} className='text-yellow-400' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='https://github.com/2244shek'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Github <FaGithub size={28} className='text-yellow-400' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] rounded-b-[10px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='https://drive.google.com/file/d/1KgDvhXEx7OXkGnunIYDnP8IT6IPVhxkg/view'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Resume <BsFillPersonLinesFill size={28} className='text-yellow-400' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
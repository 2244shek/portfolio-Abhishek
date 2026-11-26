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
            <button
                type='button'
                onClick={handleClick}
                aria-label={nav ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={nav}
                className='md:hidden z-10 p-2 text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md'
            >
                {!nav ? <FaBars /> : <FaTimes />}
            </button>

            {/* Mobile menu */}
            <div
                className={
                    !nav
                        ? 'hidden'
                        : 'md:hidden fixed inset-0 w-full h-screen bg-[#1a1a1af5] flex flex-col justify-center items-center z-40'
                }
            >
                <ul className='flex flex-col items-center'>
                    {navLinks.map(({ label, to }) => (
                        <li key={to} className='py-4 text-3xl'>
                            <Link onClick={handleClick} to={to} smooth={true} duration={500}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center gap-6 mt-8 pt-6 border-t border-yellow-500/20'>
                    <a
                        href='mailto:abhishekpanigrahi2244@gmail.com'
                        aria-label='Send Email'
                        title='Email'
                        className='text-gray-300 hover:text-yellow-400 transition-colors'
                    >
                        <HiOutlineMail size={28} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/abhishek-panigrahi-71b412220/'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='LinkedIn Profile'
                        title='LinkedIn'
                        className='text-gray-300 hover:text-yellow-400 transition-colors'
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href='https://github.com/2244shek'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub Profile'
                        title='GitHub'
                        className='text-gray-300 hover:text-yellow-400 transition-colors'
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href='https://drive.google.com/file/d/18FK9YlwAwt4O81BSC0-Ekrmk0esIbvir/view'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='View Resume'
                        title='Resume'
                        className='text-gray-300 hover:text-yellow-400 transition-colors'
                    >
                        <BsFillPersonLinesFill size={26} />
                    </a>
                </div>
            </div>

            {/* Social icons — all unified dark grey bg */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] rounded-t-[10px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='mailto:abhishekpanigrahi2244@gmail.com'
                            aria-label='Email Abhishek Panigrahi'
                            title='Email: abhishekpanigrahi2244@gmail.com'
                        >
                            <span className='mr-2'>Email</span> <HiOutlineMail size={28} className='text-yellow-400' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='https://www.linkedin.com/in/abhishek-panigrahi-71b412220/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='LinkedIn Profile'
                            title='LinkedIn Profile'
                        >
                            <span className='mr-2'>LinkedIn</span> <FaLinkedin size={28} className='text-yellow-400' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='https://github.com/2244shek'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='GitHub Profile'
                            title='GitHub Profile (@2244shek)'
                        >
                            <span>GitHub</span> <FaGithub size={28} className='text-yellow-400' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] rounded-b-[10px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] focus-within:ml-[-10px] duration-300 bg-[#2a2a2a]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300 text-xl'
                            href='https://drive.google.com/file/d/18FK9YlwAwt4O81BSC0-Ekrmk0esIbvir/view'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='View Resume PDF'
                            title='View Resume PDF'
                        >
                            <span>Resume</span> <BsFillPersonLinesFill size={28} className='text-yellow-400' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Navbar;
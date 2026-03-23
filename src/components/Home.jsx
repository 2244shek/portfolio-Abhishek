import React from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import my_pic from '../assets/my_pic.png';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-[#1a1a1a] pt-20"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex-shrink-0">
                    <img
                        src={my_pic}
                        alt="my profile"
                        className="rounded-full shadow-xl shadow-yellow-600 mx-auto md:mt-0 w-1/3 md:w-2/3"
                    />
                </div>
                <div className="flex flex-col justify-center h-full md:pl-10">
                    <h2 className="text-4xl sm:text-6xl md:mt-7 font-bold text-white max-w-lg leading-tight">
                        I build intelligent<br />web applications
                    </h2>
                    <p className="text-gray-400 py-4 max-w-md text-lg leading-relaxed">
                        Software Engineer at Prodapt Solutions, specializing in Full Stack development
                        and Generative AI. B.Tech CS (AI &amp; ML) graduate from VIT Chennai, building
                        responsive web apps and AI-powered solutions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="about"
                            smooth={true}
                            duration={50}
                            className="group text-[#1a1a1a] font-semibold w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 cursor-pointer hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                        >
                            Explore Me
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={22} className="ml-3" />
                            </span>
                        </Link>
                        <a
                            href="https://drive.google.com/file/d/1KgDvhXEx7OXkGnunIYDnP8IT6IPVhxkg/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group text-yellow-400 font-semibold w-fit px-6 py-3 flex items-center rounded-md border-2 border-yellow-500 hover:bg-yellow-500 hover:text-[#1a1a1a] transition-all duration-300"
                        >
                            Download Resume
                            <HiDownload size={22} className="ml-3" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
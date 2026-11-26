import React from 'react';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import my_pic from '../assets/my_pic.png';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="min-h-screen w-full bg-[#1a1a1a] pt-24 pb-12 flex items-center"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-6 md:flex-row gap-10">
                <div className="flex-shrink-0 relative flex justify-center">
                    <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-yellow-500/60 via-yellow-400/20 to-transparent shadow-2xl shadow-yellow-600/30">
                        <img
                            src={my_pic}
                            alt="Abhishek Panigrahi"
                            className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover border-2 border-[#1a1a1a]"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center text-center md:text-left">
                    <span className="inline-block w-fit mx-auto md:mx-0 mb-3 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                        Abhishek Panigrahi · Software Engineer
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-xl leading-tight">
                        Production <span className="text-yellow-400">AI</span> &amp;{' '}
                        <span className="text-yellow-400">Data</span> Systems
                    </h2>
                    <p className="text-gray-400 py-4 max-w-lg text-base sm:text-lg leading-relaxed mx-auto md:mx-0">
                        1.5 years of experience architecting multi-agent AI workflows, cloud FinOps
                        analytics, and resilient full-stack platforms.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-xs text-gray-300">
                        <span className="px-3 py-1.5 rounded-md bg-[#232323] border border-[#333]">
                            1.5 Yrs Experience
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-[#232323] border border-[#333]">
                            AWS &amp; Anthropic Certified
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-[#232323] border border-[#333]">
                            Hackathon Winner
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <Link
                            to="work"
                            smooth={true}
                            duration={50}
                            className="group text-[#1a1a1a] font-semibold w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-yellow-500 cursor-pointer hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300"
                        >
                            View My Work
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight size={22} className="ml-3" />
                            </span>
                        </Link>
                        <a
                            href="https://drive.google.com/file/d/18FK9YlwAwt4O81BSC0-Ekrmk0esIbvir/view?usp=sharing"
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
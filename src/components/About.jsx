import React, { useEffect, useRef } from "react";

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            name="about"
            id="about"
            className="w-full py-24 bg-[#1a1a1a] text-gray-300"
        >
            <div ref={sectionRef} className="fade-in-section flex flex-col justify-center items-center w-full px-4">
                {/* Heading */}
                <div className="max-w-[900px] w-full mb-10">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500">
                        About &#8702;
                    </p>
                </div>

                {/* Card */}
                <div className="max-w-[900px] w-full bg-[#232323] border border-yellow-500 rounded-2xl shadow-lg shadow-black/50 p-10">
                    <div className="grid sm:grid-cols-2 gap-10">
                        {/* Left */}
                        <div className="text-3xl font-bold text-white leading-snug">
                            <p>
                                Hi! I&apos;m Abhishek Panigrahi, nice to meet you.
                                Please take a look around!
                            </p>
                        </div>
                        {/* Right */}
                        <div className="text-gray-400 text-base leading-relaxed">
                            <p>
                                Software Engineer at Prodapt Solutions working on Generative AI
                                and Full Stack web applications. Completed graduation in
                                B.Tech in Computer Science with AI &amp; ML specialization at VIT
                                Chennai (CGPA: 8.54). I enjoy building responsive, scalable web
                                apps and intelligent AI-powered solutions. Outside of tech, I love{" "}
                                <strong className="text-gray-300">singing</strong> and{" "}
                                <strong className="text-gray-300">travelling</strong> to explore
                                different cultures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
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
                <div className="max-w-[900px] w-full bg-[#232323] border border-yellow-500 rounded-2xl shadow-lg shadow-black/50 p-6 sm:p-10">
                    <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
                        {/* Left */}
                        <div className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                            <p>
                                Turning complex enterprise workflows into reliable, measurable software.
                            </p>
                        </div>
                        {/* Right */}
                        <div className="text-gray-400 text-base leading-relaxed space-y-4">
                            <p>
                                I focus on bridging backend engineering, AI orchestration, and data
                                modeling—from instrumenting LLM guardrails and OpenTelemetry observability
                                on internal AI accelerators to managing telecom SD-WAN/NFX infrastructure
                                and multi-cloud FinOps reporting.
                            </p>
                            <p>
                                Graduated in B.Tech Computer Science (AI &amp; ML) from VIT Chennai
                                (CGPA: 8.54/10). Outside of work, I love{" "}
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
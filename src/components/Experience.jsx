import React, { useEffect, useRef } from 'react';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Prodapt Solutions Pvt. Ltd., Chennai',
        duration: 'Jul 2025 – Present',
        points: [
            'Developed Generative AI applications using Autogen framework and LLM integration with FastAPI backend.',
            'Built responsive front-end interfaces using ReactJS and Microsoft SharePoint Framework (SPFx).',
            'Implemented RESTful API integration between front-end and AI-powered backend services.',
        ],
    },
    {
        title: 'Software Engineering Intern',
        company: 'Prodapt Solutions Pvt. Ltd., Chennai',
        duration: 'Jan 2025 – Jun 2025',
        points: [
            'Collaborated with cross-functional teams to deliver scalable GenAI solutions for enterprise clients.',
        ],
    },
    {
        title: 'MERN Full Stack Development Certification',
        company: 'Ethnus Training Center',
        duration: 'December 2023',
        points: [],
    },
];

const TimelineCard = ({ exp, index }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const isLeft = index % 2 === 0;

    return (
        <div
            ref={ref}
            className={`fade-in-section relative flex w-full mb-12 ${isLeft ? 'justify-start pr-1/2 md:pr-[50%]' : 'justify-end pl-1/2 md:pl-[50%]'
                }`}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            {/* Dot on the center line */}
            <span
                className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-yellow-500 border-4 border-[#1a1a1a] z-10"
                style={{ boxShadow: '0 0 0 3px #f0a500' }}
            />

            <div
                className={`w-full bg-[#242424] border border-[#333] hover:border-yellow-500 transition-colors duration-300 rounded-xl p-6 shadow-lg ${isLeft ? 'md:mr-6' : 'md:ml-6'
                    }`}
            >
                <span className="text-xs font-semibold text-yellow-500 tracking-widest uppercase">
                    {exp.duration}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-3">{exp.company}</p>
                {exp.points.length > 0 && (
                    <ul className="list-none space-y-2">
                        {exp.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                <span className="text-yellow-500 mt-1">▸</span>
                                {pt}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

const Experience = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
            { threshold: 0.2 }
        );
        if (headingRef.current) observer.observe(headingRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div name="experience" id="experience" className="w-full py-24 bg-[#1a1a1a] text-gray-300">
            <div className="max-w-[900px] mx-auto px-4">
                {/* Heading */}
                <div ref={headingRef} className="fade-in-section mb-16 flex flex-col items-center">
                    <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500">
                        Experience &#8702;
                    </p>
                    <p className="text-gray-400 mt-4 text-lg text-center">
                        My professional journey so far
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical center line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-yellow-500/30" />

                    {experiences.map((exp, i) => (
                        <TimelineCard key={i} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;

import React, { useEffect, useRef } from 'react';
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi,
    SiTensorflow, SiOpencv, SiMongodb, SiMysql, SiNeo4J,
    SiGit, SiVercel, SiOpenai,
} from 'react-icons/si';
import { FaBrain } from 'react-icons/fa';

const categories = [
    {
        label: 'Frontend',
        skills: [
            { name: 'ReactJS', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'HTML5', icon: <SiHtml5 /> },
            { name: 'CSS3', icon: <SiCss3 /> },
            { name: 'Tailwind/Bootstrap', icon: <SiTailwindcss /> },
        ],
    },
    {
        label: 'Backend',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'ExpressJS', icon: <SiExpress /> },
            { name: 'FastAPI', icon: <SiFastapi /> },
        ],
    },
    {
        label: 'AI / ML',
        skills: [
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'OpenCV', icon: <SiOpencv /> },
            { name: 'LSTM', icon: <FaBrain /> },
            { name: 'LLM Integration', icon: <SiOpenai /> },
            { name: 'Generative AI', icon: <FaBrain /> },
            { name: 'RAG', icon: <FaBrain /> },
        ],
    },
    {
        label: 'Databases',
        skills: [
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'Neo4J', icon: <SiNeo4J /> },
        ],
    },
    {
        label: 'Tools',
        skills: [
            { name: 'Git/GitHub', icon: <SiGit /> },
            // { name: 'Linux', icon: <SiLinux /> },
            { name: 'Vercel', icon: <SiVercel /> },
        ],
    },
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div name='skills' className='w-full py-24 bg-[#1a1a1a] text-gray-300'>
            <div ref={sectionRef} className='fade-in-section max-w-[1000px] mx-auto px-4'>
                {/* Heading */}
                <div className='flex flex-col items-center mb-12'>
                    <p className='text-4xl font-bold inline border-b-4 border-yellow-500 text-yellow-500'>
                        Skills &#8702;
                    </p>
                    <p className='pt-5 text-lg text-gray-400 text-center max-w-xl'>
                        Always exploring new technologies — here&apos;s what I work with:
                    </p>
                </div>

                {/* Categorized skill groups */}
                <div className='space-y-10'>
                    {categories.map((cat) => (
                        <div key={cat.label}>
                            <p className='text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-4'>
                                {cat.label}
                            </p>
                            <div className='flex flex-wrap gap-3'>
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className='flex items-center gap-2 px-4 py-2 bg-[#232323] border border-yellow-500/40 rounded-lg text-sm text-gray-300 hover:border-yellow-500 hover:text-yellow-400 hover:scale-105 transition-all duration-200 cursor-default'
                                    >
                                        <span className='text-yellow-500 text-base'>{skill.icon}</span>
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Skills;
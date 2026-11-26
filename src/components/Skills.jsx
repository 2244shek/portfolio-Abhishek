import React, { useEffect, useRef } from 'react';
import {
    SiReact, SiNextdotjs, SiAngular, SiMicrosoftsharepoint,
    SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
    SiNodedotjs, SiExpress, SiFastapi, SiPython, SiCplusplus,
    SiTensorflow, SiOpencv, SiMongodb, SiMysql, SiNeo4J, SiPostgresql,
    SiGit, SiGithub, SiDocker, SiJenkins, SiKubernetes,
    SiOpenai, SiMicrosoftazure, SiAmazonaws, SiPowerbi,
} from 'react-icons/si';
import {
    FaBrain, FaDatabase, FaServer, FaNetworkWired,
    FaShieldAlt, FaRobot, FaChartBar, FaJava, FaPlug,
} from 'react-icons/fa';

const categories = [
    {
        label: 'AI / NLP / ML',
        context: 'Applied in Synapt, AgentCraft & AI Form Extractor',
        skills: [
            { name: 'LLM Integration', icon: <SiOpenai />, core: true },
            { name: 'RAG', icon: <FaBrain />, core: true },
            { name: 'AutoGen', icon: <FaRobot />, core: true },
            { name: 'LangChain', icon: <FaBrain />, core: true },
            { name: 'LangGraph', icon: <FaBrain />, core: true },
            { name: 'Azure AI', icon: <SiMicrosoftazure />, core: true },
            { name: 'AI Guardrails', icon: <FaShieldAlt />, core: true },
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'OpenCV', icon: <SiOpencv /> },
        ],
    },
    {
        label: 'Backend & APIs',
        context: 'Powering enterprise AI services & MPloyee',
        skills: [
            { name: 'FastAPI', icon: <SiFastapi />, core: true },
            { name: 'Node.js', icon: <SiNodedotjs />, core: true },
            { name: 'REST APIs', icon: <FaPlug />, core: true },
            { name: 'WebSocket', icon: <FaServer /> },
            { name: 'Express.js', icon: <SiExpress /> },
        ],
    },
    {
        label: 'Frontend',
        context: 'Enterprise SPFx portals & modern React/Next.js UIs',
        skills: [
            { name: 'ReactJS', icon: <SiReact />, core: true },
            { name: 'Next.js', icon: <SiNextdotjs />, core: true },
            { name: 'SPFx', icon: <SiMicrosoftsharepoint />, core: true },
            { name: 'TypeScript', icon: <SiTypescript />, core: true },
            { name: 'Angular', icon: <SiAngular /> },
            { name: 'HTML5', icon: <SiHtml5 /> },
            { name: 'CSS3', icon: <SiCss3 /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        ],
    },
    {
        label: 'Programming',
        context: 'Core languages across AI pipelines, APIs & analytics',
        skills: [
            { name: 'Python', icon: <SiPython />, core: true },
            { name: 'SQL', icon: <FaDatabase />, core: true },
            { name: 'JavaScript', icon: <SiJavascript />, core: true },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'Java', icon: <FaJava /> },
        ],
    },
    {
        label: 'Databases & Analytics',
        context: 'Vector search, graph data & Cloud FinOps BI modeling',
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql />, core: true },
            { name: 'Chroma DB', icon: <FaDatabase />, core: true },
            { name: 'Power BI', icon: <SiPowerbi />, core: true },
            { name: 'DAX & Power Query', icon: <FaChartBar />, core: true },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'Neo4j', icon: <SiNeo4J /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
        ],
    },
    {
        label: 'DevOps, Cloud & AI Tools',
        context: 'CI/CD releases, containerization & agent observability',
        skills: [
            { name: 'Docker', icon: <SiDocker />, core: true },
            { name: 'Kubernetes', icon: <SiKubernetes />, core: true },
            { name: 'Jenkins', icon: <SiJenkins />, core: true },
            { name: 'OpenTelemetry', icon: <FaChartBar />, core: true },
            { name: 'AWS', icon: <SiAmazonaws /> },
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub Copilot', icon: <SiGithub /> },
            { name: 'Claude', icon: <FaRobot /> },
        ],
    },
    {
        label: 'Telecom & Network',
        context: 'Production telecom reliability engineering at Prodapt',
        skills: [
            { name: 'SD-WAN', icon: <FaNetworkWired />, core: true },
            { name: 'NFX Devices', icon: <FaServer />, core: true },
            { name: 'Virtual Network Functions (VNFs)', icon: <FaNetworkWired />, core: true },
            { name: 'VNF Configuration', icon: <FaNetworkWired /> },
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
                        Grouped by domain and tied to real production work —{' '}
                        <span className='text-yellow-400 font-medium'>highlighted tags</span> are my primary daily stack.
                    </p>
                </div>

                {/* Categorized skill groups */}
                <div className='space-y-8'>
                    {categories.map((cat) => (
                        <div key={cat.label} className='bg-[#212121] border border-[#2d2d2d] rounded-xl p-5 sm:p-6'>
                            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4'>
                                <p className='text-yellow-500 text-sm font-semibold uppercase tracking-widest'>
                                    {cat.label}
                                </p>
                                <span className='text-xs text-gray-400'>{cat.context}</span>
                            </div>
                            <div className='flex flex-wrap gap-3'>
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm transition-all duration-200 cursor-default hover:scale-105 ${
                                            skill.core
                                                ? 'bg-[#2a261a] border border-yellow-500/60 text-white font-medium hover:border-yellow-400'
                                                : 'bg-[#232323] border border-[#383838] text-gray-400 hover:border-yellow-500/50 hover:text-gray-200'
                                        }`}
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
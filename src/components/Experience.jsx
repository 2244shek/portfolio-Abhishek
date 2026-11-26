import React, { useEffect, useRef } from 'react';
import { FaAward, FaGraduationCap } from 'react-icons/fa';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Prodapt Solutions, Chennai',
        duration: 'Jul 2025 – Present',
        points: [
            'Managed SD-WAN devices and Virtual Network Functions (VNFs) on NFX devices; configured and pushed VNF configurations and analyzed Kubernetes service logs with network and ops teams to improve service reliability.',
            'Contributed to Synapt (Prodapt’s internal AI accelerator) by building microservices-based auth flows, SPFx-React UI/UX components, workflow debugging, OpenTelemetry monitoring, and LLM Guardrails for agentic observability.',
            'Developed enterprise AI applications using Azure OpenAI, LLMs, AutoGen, and FastAPI, delivering production-ready REST APIs and scalable AI integrations.',
            'Contributed to AgentCraft by implementing and integrating IBM ContextForge to enhance agent orchestration and enterprise AI workflows.',
            'Gained hands-on exposure to Jenkins CI/CD workflows and DevOps practices, partnering with cross-functional teams and stakeholders to support data infrastructure.',
        ],
    },
    {
        title: 'Software Engineering Intern',
        company: 'Prodapt Solutions, Chennai',
        duration: 'Jan 2025 – Jun 2025',
        points: [
            'Developed ReactJS/SPFx frontend modules integrated with REST APIs, enabling internal teams to access AI-powered enterprise services and real-time reporting through self-service interfaces.',
            'Contributed to cross-functional Agile sprints, consistently delivering sprint goals on schedule while reducing manual workflow steps and improving operational efficiency.',
        ],
    },
];

const education = {
    degree: 'B.Tech. Computer Science — AI & ML Specialization',
    institution: 'Vellore Institute of Technology, Chennai',
    duration: '2021 – 2025',
    grade: 'CGPA: 8.54/10',
};

const certifications = [
    {
        title: 'Claude Certified Architect – Foundations Certification',
        issuer: 'Anthropic',
        date: 'Aug 2026',
    },
    {
        title: 'Won "Most Surprising Solution" — Swipe Scout',
        issuer: 'Prodapt Organization Level Hackathon (Swipe-based skill ideation platform)',
        date: 'Mar 2025',
    },
    {
        title: 'AWS Cloud Practitioner Certification',
        issuer: 'AWS',
        date: 'Jan 2024',
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

                {/* Education & Certifications */}
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    {/* Education */}
                    <div className="bg-[#242424] border border-[#333] hover:border-yellow-500 transition-colors duration-300 rounded-xl p-6 shadow-lg flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-3">
                                <FaGraduationCap className="text-lg" />
                                <span>Education</span>
                            </div>
                            <h3 className="text-lg font-bold text-white">{education.degree}</h3>
                            <p className="text-gray-400 text-sm mt-1">{education.institution}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#333] text-xs font-semibold">
                            <span className="text-yellow-500 tracking-wider uppercase">{education.duration}</span>
                            <span className="text-gray-300 bg-[#2e2e2e] px-3 py-1 rounded-md border border-yellow-500/30">
                                {education.grade}
                            </span>
                        </div>
                    </div>

                    {/* Certifications & Achievements */}
                    <div className="bg-[#242424] border border-[#333] hover:border-yellow-500 transition-colors duration-300 rounded-xl p-6 shadow-lg">
                        <div className="flex items-center gap-2 text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-3">
                            <FaAward className="text-lg" />
                            <span>Certifications &amp; Achievements</span>
                        </div>
                        <ul className="space-y-3">
                            {certifications.map((cert) => (
                                <li key={cert.title} className="flex items-start justify-between gap-3 text-sm">
                                    <div>
                                        <p className="text-white font-semibold">{cert.title}</p>
                                        <p className="text-gray-400 text-xs mt-0.5">{cert.issuer}</p>
                                    </div>
                                    <span className="text-xs font-semibold text-yellow-500 whitespace-nowrap mt-0.5">
                                        {cert.date}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

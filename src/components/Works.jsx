import React, { useEffect, useRef, useState } from 'react';
import {
    FaGithub, FaExternalLinkAlt, FaChartLine, FaFileMedical,
    FaBoxOpen, FaUsers, FaHandPaper, FaTools,
} from 'react-icons/fa';

const projects = [
    {
        name: 'Enterprise Cloud FinOps Insights Platform',
        category: 'Cloud Analytics · Power BI',
        metric: '$6,670/mo cost-leakage uncovered across 49 resources',
        icon: <FaChartLine />,
        image: null,
        description:
            'Enterprise-grade Power BI analytics dashboard aggregating AWS CUR and Azure Consumption billing data into an optimized Star Schema. Built DAX MoM variance & 14-day rolling standard-deviation anomaly detection with dynamic RLS across 42 unattached disks and 7 underutilized VMs.',
        tech: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'FinOps'],
        github: null,
        live: null,
        liveLabel: null,
    },
    {
        name: 'AI Form Extractor for Medical Documents',
        category: 'Document AI · OCR + RAG',
        metric: 'Zero manual data entry · EHR-ready JSON pipeline',
        icon: <FaFileMedical />,
        image: null,
        description:
            'Automated, compliance-grade document intelligence pipeline combining OCR, RAG architecture, and LLM integration to transform unstructured medical PDFs into structured, queryable data for fact-driven healthcare workflows.',
        tech: ['Python', 'Gemini API', 'RAG', 'pytesseract'],
        github: 'https://github.com/2244shek/RAG_PDF',
        live: null,
        liveLabel: null,
    },
    {
        name: 'FeatureSmith',
        category: 'Open-Source Python Package',
        metric: 'Published on PyPI · Automated ML feature engineering',
        icon: <FaBoxOpen />,
        image: null,
        description:
            'Intelligent feature engineering and selection Python package built to accelerate tabular machine learning pipelines, competitions, and preprocessing workflows.',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
        github: 'https://github.com/2244shek/feature-forge',
        live: 'https://pypi.org/project/featuresmith/',
        liveLabel: 'View on PyPI',
    },
    {
        name: 'MPloyee – Employee Management System',
        category: 'Full-Stack MERN Platform',
        metric: '40% faster page loads via route & component lazy loading',
        icon: <FaUsers />,
        image: null,
        description:
            'Full-stack MERN application with role-based access control and real-time dashboards for leave, expense, and timesheet management.',
        tech: ['ReactJS', 'ExpressJS', 'MongoDB', 'Node.js'],
        github: 'https://github.com/2244shek/Project_MERN-T218',
        live: null,
        liveLabel: null,
    },
    {
        name: 'Real-Time Sign Language Detection',
        category: 'Computer Vision · Deep Learning',
        metric: '98.59% recognition accuracy in real-time video inference',
        icon: <FaHandPaper />,
        image: null,
        description:
            'Real-time sign language recognition system powered by LSTM neural networks, an OpenCV video capture pipeline, and TensorFlow inference.',
        tech: ['Python', 'TensorFlow', 'OpenCV', 'LSTM'],
        github: 'https://github.com/2244shek/RTSLD---LSTM-Dense-NN',
        live: null,
        liveLabel: null,
    },
    {
        name: 'ToolNet - Website Collection',
        category: 'Developer & Student Web Suite',
        metric: 'Live web deployment · All-in-one utility hub',
        icon: <FaTools />,
        image: null,
        description:
            'A curated collection of browser-based productivity tools and utilities designed for students, developers, and designers.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/2244shek/Project-01',
        live: 'https://toolnet.vercel.app/',
        liveLabel: 'Live Demo',
    },
];

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className='fade-in-section project-card overflow-hidden flex flex-col h-full'
            style={{ transitionDelay: `${index * 0.08}s` }}
        >
            {/* Visual preview header / screenshot slot */}
            {project.image ? (
                <div className='w-full h-44 bg-[#1a1a1a] border-b border-[#333] overflow-hidden'>
                    <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        className='w-full h-full object-cover'
                    />
                </div>
            ) : (
                <div className='px-6 py-4 bg-gradient-to-r from-[#2b2619] via-[#242424] to-[#1f1f1f] border-b border-[#333] flex items-center justify-between gap-3'>
                    <span className='text-xs font-semibold uppercase tracking-wider text-yellow-400'>
                        {project.category}
                    </span>
                    <span className='w-9 h-9 rounded-lg bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 flex items-center justify-center text-base shrink-0'>
                        {project.icon}
                    </span>
                </div>
            )}

            <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-lg font-bold text-white mb-2'>{project.name}</h3>

                {/* Impact / Metric Callout */}
                {project.metric && (
                    <div className='mb-3 px-3 py-1.5 rounded-md bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-semibold'>
                        {project.metric}
                    </div>
                )}

                <p className='text-gray-400 text-sm leading-relaxed flex-grow'>{project.description}</p>

                {/* Tech tags */}
                <div className='flex flex-wrap gap-2 mt-4'>
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className='text-xs px-2 py-1 rounded-md bg-[#2e2e2e] text-yellow-400 border border-yellow-500/30'
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                    <div className='flex flex-wrap gap-3 mt-5'>
                        {project.github && (
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-[#1a1a1a] transition-all duration-200 font-semibold'
                            >
                                <FaGithub /> Code Repo
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-yellow-500 text-[#1a1a1a] hover:bg-yellow-400 transition-all duration-200 font-semibold'
                            >
                                <FaExternalLinkAlt /> {project.liveLabel || 'Live Demo'}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

const Works = () => {
    const headingRef = useRef(null);
    const [chartLoaded, setChartLoaded] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
            { threshold: 0.2 }
        );
        if (headingRef.current) observer.observe(headingRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div name='work' className='w-full py-24 bg-[#1a1a1a] text-gray-300'>
            <div className='max-w-[1000px] mx-auto px-4'>
                <div ref={headingRef} className='fade-in-section pb-12 flex flex-col items-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-yellow-500 border-yellow-500'>
                        Work &#8702;
                    </p>
                    <p className='py-4 text-lg text-gray-400 text-center'>
                        Selected enterprise, AI, and open-source projects with measurable outcomes
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 gap-6'>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                </div>

                {/* GitHub Activity Block */}
                <div className='mt-12 bg-[#232323] border border-[#333] hover:border-yellow-500/60 transition-colors duration-300 rounded-xl p-6'>
                    <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4'>
                        <div>
                            <p className='text-xs font-semibold uppercase tracking-widest text-yellow-500'>
                                Open Source &amp; Code Activity
                            </p>
                            <h3 className='text-lg font-bold text-white mt-1'>
                                GitHub Contributions (@2244shek)
                            </h3>
                        </div>
                        <a
                            href='https://github.com/2244shek'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 w-fit text-sm px-4 py-2 rounded-md border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-[#1a1a1a] transition-all duration-200 font-semibold'
                        >
                            <FaGithub /> View GitHub Profile
                        </a>
                    </div>
                    {chartLoaded && (
                        <div className='overflow-x-auto bg-[#1a1a1a] rounded-lg p-4 border border-[#2f2f2f]'>
                            <img
                                src='https://ghchart.rshah.org/f0a500/2244shek'
                                alt="Abhishek Panigrahi's GitHub contribution graph"
                                className='w-full min-w-[600px]'
                                loading='lazy'
                                onError={() => setChartLoaded(false)}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Works;
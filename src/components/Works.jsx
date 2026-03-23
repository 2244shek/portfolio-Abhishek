import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        name: 'FeatureSmith',
        description:
            'Intelligent feature engineering and selection python package for machine learning competitions and projects.',
        tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
        github: 'https://github.com/2244shek/feature-forge',
        live: 'https://pypi.org/project/featuresmith/',
    },
    {
        name: 'ToolNet - Website Collection',
        description:
            'A collection of useful tools and utilities for students, developers and designers.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/2244shek/Project-01',
        live: 'https://toolnet.vercel.app/',
    },
    {
        name: 'RAG Form Extractor for Medical Documents',
        description:
            'AI-powered system that converts unstructured medical PDFs and images into structured JSON using Google GeminiAPI, RAG model, OCR, and NLP techniques.',
        tech: ['Python', 'GeminiAPI', 'RAG', 'pytesseract'],
        github: 'https://github.com/2244shek/RAG_PDF',
        live: null,
    },
    {
        name: 'MPloyee – Employee Management System',
        description:
            'Full-stack MERN application with role-based access control, lazy loading optimization (40% faster load), and real-time dashboards for leave, expense, and timesheet management.',
        tech: ['ReactJS', 'ExpressJS', 'MongoDB', 'Node.js'],
        github: 'https://github.com/2244shek/Project_MERN-T218',
        live: null,
    },
    {
        name: 'Real-Time Sign Language Detection',
        description:
            'Real-time sign language recognition system using LSTM neural networks achieving 98.59% accuracy, with OpenCV video pipeline and TensorFlow model inference.',
        tech: ['Python', 'TensorFlow', 'OpenCV', 'LSTM'],
        github: 'https://github.com/2244shek/RTSLD---LSTM-Dense-NN',
        live: null,
    },
    // {
    //     name: 'Portfolio Website',
    //     description:
    //         'Responsive personal portfolio built with ReactJS, component-based architecture, and EmailJS API integration. Deployed on Vercel.',
    //     tech: ['ReactJS', 'CSS3', 'Web3Forms'],
    //     github: null,
    //     live: 'https://abhishekpanigrahi-self.vercel.app',
    // },
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
            className='fade-in-section project-card p-6 flex flex-col h-full'
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <h3 className='text-lg font-bold text-white mb-2'>{project.name}</h3>
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
            <div className='flex gap-3 mt-5'>
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
                        <FaExternalLinkAlt /> Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

const Works = () => {
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
        <div name='work' className='w-full py-24 bg-[#1a1a1a] text-gray-300'>
            <div className='max-w-[1000px] mx-auto px-4'>
                <div ref={headingRef} className='fade-in-section pb-12 flex flex-col items-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-yellow-500 border-yellow-500'>
                        Work &#8702;
                    </p>
                    <p className='py-4 text-lg text-gray-400 text-center'>
                        Check out some of my most recent work
                    </p>
                </div>

                <div className='grid sm:grid-cols-2 gap-6'>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.name} project={project} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Works;
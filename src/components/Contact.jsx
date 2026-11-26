import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target);
        formData.append('access_key', '0b82e5fc-9c84-4dd8-944c-2e6d29c84be8');
        formData.append('subject', 'New Message from ' + e.target.name.value);
        formData.append('from_name', "Contact Form - Abhishek Panigrahi");
        formData.append('replyto', e.target.email.value);
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();

            if (data.success) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClass =
        'w-full bg-[#1a1a1a] border border-yellow-500/40 focus:border-yellow-500 focus:outline-none rounded-lg p-3 text-gray-300 placeholder-gray-600 transition-colors duration-200';

    return (
        <div name='contact' className='w-full min-h-screen bg-[#1a1a1a] flex justify-center items-center px-4 py-24'>
            <div className='w-full max-w-[900px] grid md:grid-cols-5 gap-8 bg-[#232323] border border-yellow-500/30 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/50'>
                {/* Direct contact info */}
                <div className='md:col-span-2 flex flex-col justify-between gap-6 border-b md:border-b-0 md:border-r border-[#333] pb-6 md:pb-0 md:pr-6'>
                    <div>
                        <p className='text-3xl sm:text-4xl font-bold inline-block border-b-4 border-yellow-500 text-yellow-500'>
                            Contact &#8702;
                        </p>
                        <p className='text-gray-400 mt-4 text-sm sm:text-base leading-relaxed'>
                            Open to Software Engineering, AI Engineering, and Data/FinOps roles or collaborations. Reach out directly or send a message here.
                        </p>

                        <div className='mt-6 space-y-4 text-sm'>
                            <a
                                href='mailto:abhishekpanigrahi2244@gmail.com'
                                className='flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors break-all'
                            >
                                <HiOutlineMail className='text-yellow-500 text-lg shrink-0' />
                                <span>abhishekpanigrahi2244@gmail.com</span>
                            </a>
                            <a
                                href='tel:+917991099606'
                                className='flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors'
                            >
                                <FaPhoneAlt className='text-yellow-500 text-sm shrink-0' />
                                <span>+91-7991099606</span>
                            </a>
                            <div className='flex items-center gap-3 text-gray-400'>
                                <FaMapMarkerAlt className='text-yellow-500 text-base shrink-0' />
                                <span>Chennai, India</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 pt-2'>
                        <a
                            href='https://www.linkedin.com/in/abhishek-panigrahi-71b412220/'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='LinkedIn Profile'
                            className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#333] hover:border-yellow-500 text-gray-300 hover:text-yellow-400 text-xs font-semibold transition-colors'
                        >
                            <FaLinkedin className='text-yellow-500 text-base' /> LinkedIn
                        </a>
                        <a
                            href='https://github.com/2244shek'
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label='GitHub Profile'
                            className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#333] hover:border-yellow-500 text-gray-300 hover:text-yellow-400 text-xs font-semibold transition-colors'
                        >
                            <FaGithub className='text-yellow-500 text-base' /> GitHub
                        </a>
                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className='md:col-span-3 flex flex-col justify-center'
                >
                    {/* Hidden honeypot to block spam */}
                    <input type='checkbox' name='botcheck' className='hidden' style={{ display: 'none' }} />

                    <div className='flex flex-col gap-4'>
                        <input
                            className={inputClass}
                            type='text'
                            placeholder='Your Name'
                            name='name'
                            aria-label='Your Name'
                            required
                        />
                        <input
                            className={inputClass}
                            type='email'
                            placeholder='Your Email'
                            name='email'
                            aria-label='Your Email'
                            required
                        />
                        <textarea
                            className={inputClass}
                            rows='5'
                            placeholder='Your Message'
                            name='message'
                            aria-label='Your Message'
                            required
                        />
                    </div>

                    <button
                        type='submit'
                        disabled={status === 'sending'}
                        className='mt-6 bg-yellow-500 text-[#1a1a1a] font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 self-start disabled:opacity-60 disabled:cursor-not-allowed'
                    >
                        {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </button>

                    {/* Feedback messages */}
                    {status === 'success' && (
                        <p className='mt-4 text-green-400 text-sm font-medium'>
                            Message sent successfully! I&apos;ll get back to you soon.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className='mt-4 text-red-400 text-sm font-medium'>
                            Something went wrong. Please email me directly at abhishekpanigrahi2244@gmail.com.
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};
export default Contact;
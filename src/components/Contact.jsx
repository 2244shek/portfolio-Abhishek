import React, { useState } from 'react';

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
        <div name='contact' className='w-full min-h-screen bg-[#1a1a1a] flex justify-center items-center p-4 py-24'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col w-full md:w-1/2 max-w-[550px] bg-[#232323] border border-yellow-500/30 rounded-2xl p-10 shadow-xl shadow-black/50'
            >
                {/* Header */}
                <div className='pb-8 flex flex-col items-center'>
                    <p className='text-4xl font-bold border-b-4 border-yellow-500 text-yellow-500'>
                        Contact &#8702;
                    </p>
                    <p className='text-gray-400 py-4 text-center'>
                        Have a question or want to work together? Reach out!
                    </p>
                </div>

                {/* Hidden honeypot to block spam */}
                <input type='checkbox' name='botcheck' className='hidden' style={{ display: 'none' }} />

                <div className='flex flex-col gap-4'>
                    <input
                        className={inputClass}
                        type='text'
                        placeholder='Your Name'
                        name='name'
                        required
                    />
                    <input
                        className={inputClass}
                        type='email'
                        placeholder='Your Email'
                        name='email'
                        required
                    />
                    <textarea
                        className={inputClass}
                        rows='6'
                        placeholder='Your Message'
                        name='message'
                        required
                    />
                </div>

                <button
                    type='submit'
                    disabled={status === 'sending'}
                    className='mt-8 bg-yellow-500 text-[#1a1a1a] font-bold px-8 py-3 rounded-lg hover:bg-yellow-400 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 self-center disabled:opacity-60 disabled:cursor-not-allowed'
                >
                    {status === 'sending' ? 'Sending…' : 'Connect Now'}
                </button>

                {/* Feedback messages */}
                {status === 'success' && (
                    <p className='mt-4 text-center text-green-400 text-sm font-medium'>
                        ✅ Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                )}
                {status === 'error' && (
                    <p className='mt-4 text-center text-red-400 text-sm font-medium'>
                        ❌ Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </div>
    );
};
export default Contact;
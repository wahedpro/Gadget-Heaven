import React, { useState } from 'react';
import PageTitle from '../components/PageTitle/PageTitle';
import Heading from '../components/Heading/Heading';
import { toast } from 'react-toastify';

const FeedbackPage = () => {
    const [rangeValue, setRangeValue] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const labels = ["Poor", "Average", "Good", "Excellent"];

    const handleRangeChange = (e) => {
        setRangeValue(e.target.value);
    };

    const handleShowMessage = () => {
        toast.success("Thank you for your feedback");
        setName('');
        setEmail('');
        setMessage('');
        setRangeValue(0);
    };

    return (
        <div>
            <PageTitle title={'Feedback Page'} />
            <div className="pb-12 pt-4 bg-[#9538E2]">
                <Heading title={'Feedback'} subtitle={'Feedback is a constructive response or evaluation that provides insight, suggestions, or praise to help improve performance, behavior, or understanding.'}></Heading>
            </div>
            <div className='w-[50%] mx-auto py-10 space-y-5'>
                <h1 className='text-2xl font-bold'>Feel Free To Drop Us your Feedback.</h1>
                <label className="input input-bordered flex items-center gap-2"> Name
                    <input type="text" className="grow" placeholder="Enter Your Full Name.." value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                
                <label className="input input-bordered flex items-center gap-2"> Email
                    <input
                        type="email" className="grow" placeholder="Enter Your Mail Address..." value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                
                <textarea
                    placeholder="Write your message here.."
                    className="textarea textarea-bordered textarea-md w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                
                <div>
                    <input
                        type="range" min="0" max="100" value={rangeValue} className="range" step="33.3"
                        onChange={handleRangeChange}
                    />
                    <div className="flex w-full justify-between px-2 text-xs">
                        {labels.map((label, index) => (
                            <span key={index}>{label}</span>
                        ))}
                    </div>
                </div>
                
                <button onClick={handleShowMessage} className='px-5 py-3 bg-[#9538E2] text-white rounded-lg'>
                    Send Feedback
                </button>
            </div>
        </div>
    );
};

export default FeedbackPage;
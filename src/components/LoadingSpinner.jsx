import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
                <p className='text-7xl font-thin'>L</p>
                <div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
                <p className='text-7xl font-thin'>loading....</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
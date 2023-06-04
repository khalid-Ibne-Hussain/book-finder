import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="bg-white ">
                <img className='mx-auto' src="/404.gif" alt="404 gif file" />
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">

                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can not find this page.</p>
                        <button type="button" className="btn btn btn-outline btn-accent"><Link to="/">Go Back Homepage</Link></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;
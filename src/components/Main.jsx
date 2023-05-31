import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from './Card';
import axios from 'axios';
import { useState } from 'react';

const Main = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const searchBook = event => {
        if (event.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAX5rVHlQRdHEY1eEQ6-3Nf2DRJuhiMYBE')
                .then(res => setBooks(res.data.items))
                .catch(error => console.log(error))
        }
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className=' bg-slate-200 py-20'>
                <div className='flex flex-col gap-5 lg:flex-row items-center'>
                    <div className='md:w-1/2'>
                        <h2 className='text-3xl font-semibold capitalize'>A room without books is like <br /> a body without a soul.</h2>
                    </div>
                    <div className='w-1/2 flex-col justify-center  bg-red-200 '>
                        <h2 className=''>Find Your Book</h2>
                        <div className=''>
                            <input value={search} onChange={e => setSearch(e.target.value)} onKeyDown={searchBook} className='w-[70%] rounded pl-2 py-1 outline outline-2  outline-offset-2 ' type="text" placeholder='Type...' />
                            <button><FaSearch></FaSearch> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    <Card books={books} />
                }
            </div>
        </div>
    );
};

export default Main;
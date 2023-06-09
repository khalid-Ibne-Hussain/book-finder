import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from './Card';
import axios from 'axios';
import { useState } from 'react';

const api_key = import.meta.env.API_KEY;

const Main = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    // ------------------
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);
    // --------------------


    const searchBook = event => {
        // event.preventDefault();
        if (event.key === "Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAX5rVHlQRdHEY1eEQ6-3Nf2DRJuhiMYBE' + '&maxResults=40')
                .then(res => setBooks(res.data.items))
                .catch(error => console.log(error))
        }
    }

    //----------------------
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = books.slice(firstPostIndex, lastPostIndex);
    //----------------------


    return (
        <div className='bg-[#f5f5f5]'>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
                <div className='  py-20'>
                    <div className='flex flex-col gap-5  items-center'>
                        <div className=''>
                            <h2 className='text-3xl font-semibold capitalize'>Book Finder...</h2>
                        </div>
                        <div className=' flex-col justify-center '>

                            <div className="group w-72 md:w-80 lg:w-96">


                                <div className="relative flex items-center">

                                    <input value={search} onChange={e => setSearch(e.target.value)}
                                        onKeyDown={searchBook} id="8" type="text" className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg shadow-2xl border-b-2" placeholder='type...' />
                                    <div className="absolute right-0 h-5 w-10 rounded-r-md "><span className='flex justify-center'><FaSearch className='text-xl font-semibold text-slate-500'></FaSearch></span></div>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    {
                        // <Card books={books} />
                        <Card currentPosts={currentPosts} postsPerPage={postsPerPage} books={books} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    }
                </div>

            </div>
        </div>
    );
};

export default Main;
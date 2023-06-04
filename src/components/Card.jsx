import React, { useState } from 'react';
// import BookCard from './BookCard';
import Modal from './Modal';
import noImg from '../../public/not-found.jpg'

const Card = ({ books }) => {
    // console.log(books);


    // const


    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();



    return (
        <div className='grid gap-6 mb-8 lg:grid-cols-4 md:grid-cols-3 justify-center'>
            {
                books.map(book => {
                    const bookImg = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                    const author = book.volumeInfo.authors && book.volumeInfo.authors[0];
                    const title = book.volumeInfo.title;
                    const publishedDate = book.volumeInfo.publishedDate;

                    // <BookCard key={book.id} book={book}></BookCard>


                    {
                        return (
                            <div key={book.id} className='overflow-hidden  rounded shadow-xl hover:shadow-2xl bg-white p-4  relative pb-10'>
                                <div className='flex justify-center relative transition duration-200 transform hover:-translate-y-2'>

                                    <img src={bookImg ? bookImg : noImg} alt=""
                                        className={` object-fill ${bookImg ? 'w-[160px] h-[220px]' : 'w-[160px] max-h-[220px]'} shadow-2xl `} />
                                </div>
                                <div className='flex flex-col gap-5 justify-between items-center '>
                                    <div className='text-center'>
                                        <h3 className='text-center font-semibold text-lg py-4'>{title}</h3>
                                        <p className='mb-2 text-slate-500 font-semibold'>By</p>
                                        <p className='font-semibold'> {author}</p>

                                        <p className='py-2 mb-5 '><span className='font-semibold'>Published:</span> {publishedDate}</p>
                                    </div>

                                    <div className='mt-auto absolute bottom-2'>
                                        <button onClick={() => { setShow(true); setItem(book) }} className='btn  btn-outline btn-sm btn-success hover:text-white  px-10'>Details</button>
                                    </div>

                                </div>
                                <Modal show={show} bookDetail={bookItem} onClose={() => setShow(false)}></Modal>

                            </div>


                        )
                    }
                })
            }

        </div>
    );
};

export default Card;
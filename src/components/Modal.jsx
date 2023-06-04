import React from 'react';
import './Modal.css'
import noImg from '../../public/not-found.jpg'
import { useLoaderData } from 'react-router-dom';
import { FaCloudShowersHeavy, FaExternalLinkAlt, FaWindowClose } from 'react-icons/fa';

const Modal = ({ show, bookDetail, onClose }) => {

    // bookDetails = useLoaderData();
    // console.log(bookDetail);

    // console.log(item);

    const bookImg = bookDetail?.volumeInfo?.imageLinks && bookDetail?.volumeInfo?.imageLinks?.smallThumbnail;
    // const bookImg = bookDetail.volumeInfo.imageLinks.smallThumbnail;
    const author = bookDetail?.volumeInfo?.authors && bookDetail?.volumeInfo?.authors[0];
    const title = bookDetail?.volumeInfo?.title;
    const publishedDate = bookDetail?.volumeInfo?.publishedDate;
    const description = bookDetail?.volumeInfo?.description;
    const detailsLink = bookDetail?.volumeInfo?.previewLink;


    if (!show) {
        return null;
    }


    return (
        <div>
            <div className="fixed inset-0 
            
            flex items-center justify-center overlay">
                <div className="bg-white w-max-700 h-auto  p-8 relative box-border overflow-hidden overlay-inner rounded-lg">

                    {/*  */}

                    {/* <div className="overlay min-h-screen w-full fixed left-0 top-0 bottom-0 right-0 bg-gradient-to-br from-gray-200 via-transparent to-gray-200 flex items-center justify-center">

                    </div> */}

                    {/*  */}
                    <div className='flex gap-4'>
                        <div>

                            <img className='w-[768px] shadow-2xl object-fill' src={bookImg ? bookImg : noImg} alt="" />

                            <p className='my-2 text-sm text-slate-500 text-center'>By</p>
                            <p className='text-slate-500 text-base'>{author}</p>

                        </div>
                        <div >
                            <p className='text-black text-2xl font-semibold'>{title}</p>
                            <p className='my-5 text-slate-600 text-base'><span className='text-lg font-semibold'>Description:</span> {description.slice(0, 335)} ...</p>
                            <a href={detailsLink} target='_blank' rel="noreferrer">
                                <button className='btn btn-sm btn-link text-blue-500'>More Details<FaExternalLinkAlt className='ml-2' /></button> </a>
                        </div>
                    </div>

                    <button onClick={onClose} className="absolute top-1 right-1 outline-none border-none text-lg  close"><FaWindowClose className='text-2xl'></FaWindowClose></button>
                </div>
            </div>


        </div>
    );
};

export default Modal;
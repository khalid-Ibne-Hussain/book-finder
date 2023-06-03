// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Modal from './Modal';
// import noImg from '../../public/not-found.jpg'

// const BookCard = ({ book }) => {
//     console.log(book);
//     const bookImg = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
//     const author = book.volumeInfo.authors && book.volumeInfo.authors[0];
//     const title = book.volumeInfo.title;
//     const publishedDate = book.volumeInfo.publishedDate;

//     const [show, setShow] = useState(false);
//     const [bookItem, setItem] = useState();

//     // console.log(book.selfLink);
//     const id = book.id;
//     // console.log(id);


//     // onClick={() => { setShow(true); setItem(book) }}
//     // bookImg &&
//     // to={`/${id}`}
//     return (
//         <>
//             {

//                 <div key={book.id} className='overflow-hidden  rounded shadow-xl hover:shadow-2xl bg-white p-4'>
//                     <div className='flex justify-center relative transition duration-200 transform hover:-translate-y-2'>
//                         {/* <img src={bookImg ? bookImg : noImg} alt="" className=' object-fill max-w[180px] shadow-2xl rounded-md' /> */}
//                         <img src={bookImg ? bookImg : noImg} alt=""
//                             className={` object-fill ${bookImg ? 'w-[160px] h-[220px]' : 'w-[160px] max-h-[220px]'} shadow-2xl `} />
//                     </div>
//                     <div className='text-black text-center'>
//                         <h3 className='text-center font-semibold text-lg py-4'>{title}</h3>
//                         <p className='mb-2 text-slate-500 font-semibold'>By</p>
//                         <p className='font-semibold'> {author}</p>
//                         <p className='py-2'><span className='font-semibold'>Published Year:</span> {publishedDate}</p>
//                         {/* <Link to={`/book/${id}`}> */}
//                         {/* <Link to={`/book`}> */}
//                         <button onClick={() => { setShow(true); setItem(book) }} className='btn btn-success btn-sm'>Details</button>
//                         {/* </Link> */}
//                     </div>
//                     {/* <Modal show={show} bookDetail={bookItem} onClose={() => setShow(false)}></Modal> */}




//                 </div>

//             }
//         </>

//     );
// };

// export default BookCard;
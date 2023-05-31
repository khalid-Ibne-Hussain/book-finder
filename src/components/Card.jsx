import React from 'react';

const Card = ({ books }) => {
    console.log(books);
    // const 
    return (
        <div>
            {
                books.map(book => {
                    const bookImg = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                    return (
                        <>
                            <div key={book.id}>
                                <img src={bookImg} alt="" />
                                <div>
                                    <h3>React Js</h3>
                                    <p>$ 20</p>

                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
    );
};

export default Card;
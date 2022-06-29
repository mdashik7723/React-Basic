import React from "react";

const BookDetail = props => {
    if (props.book == null) return <div></div>
    return (
        <div>
            <h1>{props.book.bookName}</h1>
        </div>
    );
}

export default BookDetail;
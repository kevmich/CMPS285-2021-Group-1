import React from 'react';
import './BookingButton.css';
import {Link} from 'react-router-dom';

export function BookingButton() {
    return (
        <button
            className='bookingBtn'
            href="https://square.site/book/VKYEJ3SQ1VFW7/the-beauty-garden-slidell-la"
            title="Go to external site: https://square.site/book/VKYEJ3SQ1VFW7/the-beauty-garden-slidell-la"
        >
            Book Now
        </button>
    );
}

export default BookingButton;
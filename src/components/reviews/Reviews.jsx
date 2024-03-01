// import React from 'react'
// import './reviews.css'

// export default function Reviews() {
//   return (
//     <div>
//       Reviews
//     </div>
//   )
// }


import React from 'react';
import './reviews.css';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";

function Review(props) {
    const { author, date, content , rating } = props;

    return (
        <div className="review">
            <h3 className="review-author">{author}<span className="rating-container">{rating}</span></h3>
            <p className="review-date">{date}</p>
            <p className="review-content">{content}</p>
        </div>
    );
}

function Reviews() {
    return (
        <div className="review-container">
            <h2>Customer Reviews</h2>
            <Review
                author="John Doe"
                rating={[<IoMdStar />, <IoMdStar/>, <IoMdStar />,<IoMdStarHalf /> ]}
                date="January 15, 2024"
                content="My trip with your company was amazing! The tour guides were knowledgeable and friendly. I got to see breathtaking views and experience new cultures. Highly recommended!"
            />
            <Review
                author="Jane Smith"
                rating={[<IoMdStar />, <IoMdStar/>,<IoMdStarHalf /> ]}
                date="February 1, 2024"
                content="I had an unforgettable experience traveling with your team. The accommodations were top-notch, and the itinerary was well-planned. Thank you for the memories!"
            />
             <Review
                author="Jane Smith"
                rating={[<IoMdStar />, <IoMdStar/>, <IoMdStar />,<IoMdStar /> ]}
                date="February 1, 2024"
                content="I had an unforgettable experience traveling with your team. The accommodations were top-notch, and the itinerary was well-planned. Thank you for the memories!"
            />
             <Review
                author="Jane Smith"
                rating={[<IoMdStar />, <IoMdStar/>]}
                date="February 1, 2024"
                content="I had an unforgettable experience traveling with your team. The accommodations were top-notch, and the itinerary was well-planned. Thank you for the memories!"
            />
             <Review
                author="Jane Smith"
                rating={[<IoMdStar />, <IoMdStar/>, <IoMdStar />,<IoMdStarHalf /> ]}
                date="February 1, 2024"
                content="I had an unforgettable experience traveling with your team. The accommodations were top-notch, and the itinerary was well-planned. Thank you for the memories!"
            />
        </div>
    );
}

export default Reviews;

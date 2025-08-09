import React from 'react';

import './review-spotlight.scss';
import UserIcon from '../../../assets/icons/userIcon.png';
import StockHotel from '../../../assets/images/hotel.jpg';

export default function ReviewSpotlight() {
    
     const FeaturedReview = () => {
        const featuredReview = [
        {
            id: 1,
            title: "Brilliant Stay at Hotel X",
            image: StockHotel,
            rating: "⭐⭐⭐⭐⭐",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ull",
            user: "John Doe",
            userAvatar: UserIcon,
        },
    ]

    return (
  <section className="review-spotlight">
    {featuredReview.map((review, index) => (
      <div className="review" key={index}>
        <div className="review-content">
          <div className="review-image">
            <img src={review.image}/>
          </div>

          <div className="review-details">
            <div className="review-header">
              <h3>{review.title}</h3>
            </div>

            <div className="review-text">
              <p className="review-rating">{review.rating}</p>
              <p>{review.content}</p>
            </div>

            <div className="review-footer">
              <img src={review.userAvatar} />
              <p>{review.user}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
);
}
    return <FeaturedReview />
}
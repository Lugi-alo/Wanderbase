import React from 'react';

export default function ReviewSpotlight() {
    
     const FeaturedReview = () => {
        const featuredReview = [
        {
            id: 1,
            title: "Featured Review",
            image: "placeholder review image",
            rating: "review rating",
            content: "review content",
            user: "User X",
            userAvatar: "placeholer avatar",
        },
    ]

    return (
        <section className="review-spotlight">
            {featuredReview.map((review, index) => (
            <div className="review" key={index}>
                <div className="review-header">
                    <h3>{review.title}</h3>
                    <p>{review.user}</p>
                    <p> {review.userAvatar}</p>
                </div>
                <div className="review-content">
                    <p> {review.image} </p>
                    <p>Rating: {review.rating}</p>
                    <p>{review.content}</p>
                    <p>Written by: {review.user}</p>
                </div>
            </div>
            ))}
        </section>
);
}
    return <FeaturedReview />
}
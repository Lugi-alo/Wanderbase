import React from "react";
import './perks.scss';
import dataIcon from "../../../assets/icons/dataIcon.svg";
import reviewIcon from "../../../assets/icons/reviewIcon.svg";
import reviewImage from "../../../assets/images/review.jpg";
import dataAnalyticsImage from "../../../assets/images/data-analytics.png";


export default function Perks() {
    
    const PerkList = () => {
        const perkList = [
        {
            name: "Smart Support & Review Insight",
            audience: "User",
            description: "Get instant chat assistance and AI-powered review ratings to help you make confident travel decisions!",
            icon: reviewIcon,
            image: reviewImage
        },
        {
            name: "Top Quality Data Analytics",
            audience: "Business",
            description: "We analyse real-time interactions, including views, ratings, and session duration, and present them as clear, actionable insights!",
            icon: dataIcon,
            image: dataAnalyticsImage
        },
    ];

    const businessPerks = perkList.filter(perk => perk.audience == "Business");
    const userPerks = perkList.filter(perk => perk.audience == "User")

    return (
        <section>
            <div className='business'>
                {businessPerks.map((perk, index) => (
                    <div key={index} className="perk-container">
                        <div className='perk-image data'>
                            <img src={dataAnalyticsImage} />
                        </div>
                        <div className='perk-content'>
                            <img src={perk.icon} />
                            <h2> {perk.name} </h2> 
                            <p> {perk.description} </p>
                        </div>
                    </div>
                    ))}
            </div>
            <div className='user'>
                {userPerks.map((perk, index) => (
                    <div key={index} className="perk-container">
                        <div className='perk-image'> 
                            <img src={reviewImage} />
                        </div>
                        <div className='perk-content'>
                            <img src={perk.icon} />
                            <h2> {perk.name} </h2>
                            <p> {perk.description} </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

return <PerkList/>
}
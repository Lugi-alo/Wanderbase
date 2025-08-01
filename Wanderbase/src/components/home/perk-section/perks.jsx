import React from "react";
import './perks.scss';


export default function Perks() {
    
    const PerkList = () => {
        const perkList = [
        {
            name: "Expert Review Analysis",
            audience: "User",
            description: "Our site uses artificial intelligence to bring you the best and most accurate review ratings!",
            icon: "review-icon"
        },
        {
            name: "Top Quality Data Analytics",
            audience: "Business",
            description: "From review ratings to your page views and time spent, you can rely on us to make informed decisions",
            icon: "data-icon"
        },
        {
            name: "Instant Chat Advice",
            audience: "User",
            description: "Our site uses an instant chat advice center to help you with any queries you may have!",
            icon: "chat-icon"
        }
    ];

    const businessPerks = perkList.filter(perk => perk.audience == "Business");
    const userPerks = perkList.filter(perk => perk.audience == "User")

    return (
        <section>
            <div className='business'>
                {businessPerks.map((perk, index) => (
                    <div key={index} className="perk perk-container">
                        <div className='perk-image'>
                            <p> placeholder image </p>
                        </div>
                        <div className='perk-content'>
                            <h2> {perk.name} </h2> 
                            <p> {perk.description} </p>
                        </div>
                    </div>
                    ))}
            </div>
            <div className='user'>
                {userPerks.map((perk, index) => (
                    <div key={index} className="perk perk-container">
                        <div className='perk-image'> 
                            <p>placeholder image </p>
                        </div>
                        <div className='perk-content'>
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
import React from "react";
import Perks from "../../components/home/perk-section/perks.jsx";
import NavBar from "../../components/common/nav-bar/navBar.jsx";
import Hero from "../../components/home/hero/hero.jsx";
import FeaturedReview from "../../components/home/review-spotlight/review-spotlight.jsx";

export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Perks />
            <FeaturedReview/>
        </div>
    )
}
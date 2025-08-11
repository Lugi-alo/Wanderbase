import React from "react";
import Perks from "../../components/home/perk-section/perks.jsx";
import NavBar from "../../components/common/nav-bar/navBar.jsx";
import Hero from "../../components/home/hero/hero.jsx";
import FeaturedReview from "../../components/home/review-spotlight/review-spotlight.jsx";
import LazySection from "../../components/common/lazy-section/lazy-section.jsx";

export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <LazySection>
            <Perks />
            </LazySection>
            <LazySection>
            <FeaturedReview/>
            </LazySection>
        </div>
    )
}
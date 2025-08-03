import React from "react";
import Perks from "../../components/home/perk-section/perks.jsx";
import NavBar from "../../components/common/nav-bar/navBar.jsx";
import Hero from "../../components/home/hero/hero.jsx";

export default function Home() {
    return (
        <div>
            <NavBar />
            <Hero />
            <Perks />
        </div>
    )
}
import React from "react";
import NavBar from "./components/nav-bar/navBar.jsx";
import Home from "./pages/home/home.jsx";
import Perks from "./components/perk-section/perks.jsx";

function App() {
    console.log("App loaded");
    return (
    <div>
        <NavBar/>
        <Home />
        <Perks />
    </div>
    );
}

export default App;
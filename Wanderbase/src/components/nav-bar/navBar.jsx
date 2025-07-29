import React from "react";

export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/" className="home"> Home </a>
            <ul>
                <li> 
                    <a href="/sign-up"> Sign Up </a>
                </li>
            </ul>
        </nav>
    );
}
import React from "react";
import {useState, useEffect} from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    
    return (
        <nav className="nav">
            <a href="/"> Home </a>
            <ul>
                <li><a href="/Sign-up"> Sign Up </a> </li>
                <li><a href="/Login"> Login </a></li>
            </ul>

            <button onClick={() => setOpen(!open)}> Search </button>

            {open && (
                <div className="search-input">
                    <input type="text" placeholder="Search hotels or reviews..." autoFocus />
                </div>
            )}
        
        </nav>
    );
}
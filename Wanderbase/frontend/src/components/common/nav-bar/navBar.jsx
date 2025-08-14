import React from "react";
import {useState, useEffect} from "react";

import "./navBar.scss";

export default function NavBar() {
    const [open, setOpen] = useState(false);

    let searchClass = 'search-input';
    if (open) {
        searchClass += ' visible';
    }
    
    return (
        <nav className="nav">
            <a href="/"> Home </a>
            
            <ul>
                <li><a href="/Sign-up"> Sign Up </a> </li>
                <li><a href="/Login"> Login </a></li>
            </ul>

            <div className="nav-actions">
                <button onClick={() => setOpen(!open)}> Search </button>
            </div>

            <div className={searchClass}>
                <input type="text" placeholder="Search hotels or reviews..." autoFocus />
            </div>
        
        </nav>
    );
}
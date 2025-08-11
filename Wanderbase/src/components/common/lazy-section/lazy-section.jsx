import React from "react";
import {useState, useRef, useEffect} from 'react';

import "./lazy-section.scss";

export default function LazySection({children}) {
    const ref = useRef();
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true);
        }, {threshold: 0.1 });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    if (!isVisible) {
        return <div ref={ref}> </div>;
    }

    return <div className="fade-in" ref={ref}> {children} </div>;
}
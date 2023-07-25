import React, { useState, useEffect } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className={`fixed bottom-4 right-4 ${isVisible? 'opacity-100' : 'opacity-0'}`} onClick={goTop}>
            <BsFillArrowUpCircleFill size="50px" color="#7795CB"/>
        </button>
    );
}

export default ScrollToTop;
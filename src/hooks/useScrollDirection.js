import { useState, useEffect } from 'react';

export const useScrollDirection = () => {

    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return showNavbar;
}
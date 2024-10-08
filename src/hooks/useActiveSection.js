import { useEffect, useState } from "react";

export const useActiveSection = () => {
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return activeSection;
}
import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const updateScrollY = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', updateScrollY);
        return () => window.removeEventListener('scroll', updateScrollY);
    }, []);

    return scrollY;
};
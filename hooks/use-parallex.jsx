import { useEffect, useState } from "react"

export const useParallax = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.screenY);
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollY
}
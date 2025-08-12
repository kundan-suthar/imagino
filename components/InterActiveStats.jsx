import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/useInterSectionObserver";


// Animated Counter Component
const AnimatedCounter = ({ target, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

    useEffect(() => {
        if (!isIntersecting) return;

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isIntersecting, target, duration]);

    return (
        <span ref={ref} className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {count.toLocaleString()}{suffix}
        </span>
    );
};

const InterActiveStats = () => {
    const stats = [
        { label: 'Images Enhanced', value: 1000, suffix: '+' },
        { label: 'Active Creators', value: 100, suffix: '+' },
        // { label: 'AI Models', value: 25, suffix: '' },
        { label: 'Processing Speed', value: 100, suffix: '% faster' },
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl lg:text-5xl font-black mb-2">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-white/70 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InterActiveStats

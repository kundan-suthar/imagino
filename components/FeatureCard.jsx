import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';
import React, { useState } from 'react'

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={ref}
            className={`cursor-hover backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-700 hover:bg-white/10 hover:scale-105 hover:rotate-1 hover:shadow-2xl ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`text-4xl mb-4 transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold  mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {title}
            </h3>
            <p className="leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard

import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';
import React from 'react'

const PricingCard = ({ plan, price, features, featured = false, buttonText }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.3 });

    return (
        <div
            ref={ref}
            className={`cursor-hover relative backdrop-blur-lg border rounded-2xl p-8 transition-all duration-700 hover:scale-105 ${featured
                ? ' bg-white/5 border-white/10 hover:bg-white/10 '
                : 'bg-gradient-to-b from-white/20 to-white/10 border-white/30 '
                } ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
            {featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                    </span>
                </div>
            )}

            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    ${price}
                </div>
                <p className="text-white/60 mt-1">per month</p>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white/80">
                        <span className="text-green-400 mr-3">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className="cursor-hover w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                {buttonText}
            </button>
        </div>
    );
};

export default PricingCard

"use client"
import FeatureCard from '@/components/FeatureCard';
import HeroSection from '@/components/HeroSection';
import InterActiveStats from '@/components/InterActiveStats';
import Pricing from '@/components/Pricing';
import PricingCard from '@/components/PricingCard';
import { useIntersectionObserver } from '@/hooks/useInterSectionObserver';
import { PricingTable } from '@clerk/nextjs';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// Custom Hooks
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', updateScrollY);
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollY;
};

// Custom Cursor Component
const CustomCursor = () => {
  const mousePosition = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      if (e.target.classList.contains('cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <div
      className={`fixed w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ${isHovering ? 'scale-150' : 'scale-100'
        }`}
      style={{
        left: mousePosition.x - 10,
        top: mousePosition.y - 10,
      }}
    />
  );
};

// Floating Shapes Component
const FloatingShapes = () => {
  const scrollY = useScrollPosition();

  const shapes = useMemo(() => [
    { id: 1, size: 'w-72 h-72', gradient: 'from-blue-500 to-purple-600', top: '10%', left: '80%' },
    { id: 2, size: 'w-96 h-96', gradient: 'from-purple-500 to-pink-500', top: '60%', left: '10%' },
    { id: 3, size: 'w-64 h-64', gradient: 'from-cyan-500 to-blue-600', top: '30%', left: '60%' },
    { id: 4, size: 'w-80 h-80', gradient: 'from-pink-500 to-orange-500', top: '80%', left: '70%' },
  ], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`absolute ${shape.size} bg-gradient-to-r ${shape.gradient} blur-3xl opacity-20 animate-pulse rounded-full`}
          style={{
            top: shape.top,
            left: shape.left,
            transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
          }}
        />
      ))}
    </div>
  );
};




// // Interactive Stats Component
// const InteractiveStats = () => {
//   const stats = [
//     { label: 'Images Enhanced', value: 1000, suffix: '+' },
//     { label: 'Active Creators', value: 100, suffix: '+' },
//     // { label: 'AI Models', value: 25, suffix: '' },
//     { label: 'Processing Speed', value: 100, suffix: '% faster' },
//   ];

//   return (
//     <section className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <div className="text-4xl lg:text-5xl font-black mb-2">
//                 <AnimatedCounter target={stat.value} suffix={stat.suffix} />
//               </div>
//               <p className="text-white/70 font-medium">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// Main App Component
const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: '🧠',
      title: 'Neural Background Removal',
      description: 'AI-powered precision that understands context and removes backgrounds with quantum accuracy.',
      delay: 0
    },
    {
      icon: '⚡',
      title: 'Quantum Upscaling',
      description: 'Enhance resolution by up to 800% while maintaining photorealistic detail through neural networks.',
      delay: 200
    },
    {
      icon: '🎨',
      title: 'Style Transfer Matrix',
      description: 'Transform any image into masterpieces using our advanced style transfer algorithms.',
      delay: 400
    },
    {
      icon: '🚀',
      title: 'Real-time Processing',
      description: 'Experience instant results with our cloud-accelerated processing infrastructure.',
      delay: 600
    }
  ];

  const pricingPlans = [
    {
      plan: 'Free',
      price: 0,
      features: [
        '1,000 AI enhancements/month',
        'Neural background removal',
        'Basic style transfers',
        'HD export quality',
        'Email support'
      ],
      buttonText: 'Start Creating',

    },
    {
      plan: 'Pro',
      price: 49,
      featured: true,
      features: [
        '10,000 AI enhancements/month',
        'All neural features',
        'Quantum upscaling',
        '4K export quality',
        'Priority support',
        'Commercial license'
      ],
      buttonText: 'Unleash Power'
    }
    // ,
    // {
    //   plan: 'Enterprise',
    //   price: 199,
    //   features: [
    //     'Unlimited enhancements',
    //     'Custom AI models',
    //     'API access',
    //     '8K export quality',
    //     'Dedicated support',
    //     'White-label solution'
    //   ],
    //   buttonText: 'Contact Sales'
    // }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden ">
      {/* {!isMobile && <CustomCursor />} */}
      {/* <FloatingShapes /> */}


      <HeroSection />

      <InterActiveStats />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Features
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Power Level
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section> */}
      <Pricing />

      {/* CTA Section */}
      <section className="py-20 pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Reality?
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join thousands of creators who have already discovered the future of image editing.
          </p>
          <button className="cursor-hover bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
'use client'
import { Award, Globe, Users, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './styles/about.css';
const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: " 100%",
    label: "Client-First Approach",
    description: "Focused on solving real operational pain"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    number: "7",
    label: "MVP Turnaround",
    description: "Get your first working version in just one week"
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "0",
    label: "Zero Legacy Bloat",
    description: "Fast, secure, and scalable software"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "99.9%",
    label: "System Uptime",
    description: "Reliable and robust infrastructure"
  }
];

export default function About() {
  // Custom hook for intersection observer
  function useIntersectionObserver(threshold = 0.1) {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const observers = useRef(new Map());

    const observe = (element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleItems(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(index);
            }
            return newSet;
          });
        },
        { threshold }
      );

      observer.observe(element);
      observers.current.set(index, observer);
    };

    const unobserve = (index) => {
      const observer = observers.current.get(index);
      if (observer) {
        observer.disconnect();
        observers.current.delete(index);
      }
    };

    useEffect(() => {
      return () => {
        observers.current.forEach(observer => observer.disconnect());
      };
    }, []);

    return { visibleItems, observe, unobserve };
  }

  const { visibleItems, observe, unobserve } = useIntersectionObserver(0.2);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (ref) observe(ref, index);
    });

    return () => {
      cardRefs.current.forEach((_, index) => unobserve(index));
    };
  }, []);
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#0b0c19]"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Leading the Digital Transformation of Automotive Industry
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-6 drop-shadow-md">
                AutoService represents the next generation of automotive software. We're a forward-thinking team committed to revolutionizing how automotive businesses manage their operations, serve customers, and scale their success through intelligent, user-friendly technology.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md">
                Our team of industry experts and software engineers work closely with clients to develop
                customized solutions that integrate seamlessly with existing workflows and scale with
                business growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white drop-shadow-md">Why Choose AutoService?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <span className="text-gray-200">Industry-specific expertise and deep domain knowledge</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <span className="text-gray-200">Scalable solutions that grow with your business</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <span className="text-gray-200">24/7 support and comprehensive training programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  <span className="text-gray-200">Proven track record with measurable ROI</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`
                  glass-stat-card group cursor-pointer
                  transform transition-all duration-700 ease-out
                  ${visibleItems.has(index)
                    ? 'translate-y-0 opacity-100 scale-100'
                    : 'translate-y-8 opacity-0 scale-95'
                  }
                `}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon with Enhanced Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-all duration-500 scale-150"></div>
                  <div className="relative text-blue-400 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 flex justify-center">
                    {stat.icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-3xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  {stat.description}
                </div>

                {/* Hover Accent Line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
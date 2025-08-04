'use client'
import {
  BarChart3,
  Car,
  CreditCard,
  Database,
  Settings,
  Shield,
  Smartphone,
  Users,
  Wrench
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import "./styles/solutions.css";


const services = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Dealership management solutions",
    description: "We deliver comprehensive solutions to handle front-end and back-end operations in auto dealership companies."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Service Center Solutions",
    description: "Streamline workshop operations with appointment scheduling, work order management, and technician tracking."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Automotive ecommerce solutions",
    description: "We build custom platforms for auto retailers to sell vehicles, parts, services, and enhance customer experience"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Inventory Management",
    description: "Real-time parts inventory tracking, automated reordering, and supplier management for optimal stock levels."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Logistics software",
    description: "We develop solutions to help companies from the automotive sector manage and optimize supply chain processes, such as the distribution and delivery of vehicles, parts, and components."
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Processing",
    description: "Secure payment gateway integration with multiple payment options and automated billing systems."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Applications",
    description: "Custom mobile apps for customers and staff with booking, tracking, and communication features."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Customer Portal",
    description: "Self-service customer portal for appointment booking, service history, and maintenance reminders."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Compliance",
    description: "Enterprise-grade security with data encryption, compliance management, and audit trails."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "System Integration",
    description: "Seamless integration with existing systems, third-party APIs, and automotive industry standards."
  }
];

// Custom hook for intersection observer
function useIntersectionObserver(threshold: number = 0.1) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const observers = useRef<Map<number, IntersectionObserver>>(new Map());

  const observe = (element: Element | null, index: number) => {
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

  const unobserve = (index: number) => {
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

export default function Services() {
  const { visibleItems, observe, unobserve } = useIntersectionObserver(0.2);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((ref, index) => {
      if (ref) observe(ref, index);
    });

    return () => {
      cardRefs.current.forEach((_, index) => unobserve(index));
    };
  }, [observe, unobserve]);

  const getDelayClass = (index: number): string => {
    const delay = (index % 10) + 1;
    return `delay-${delay * 100}`;
  };

  return (
    <section id="services" className="services-section">
      {/* Gradient Background */}
      <div className="gradient-background"></div>

      {/* Animated Background Elements */}
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="content-container">
        <div className="header-section">
          <h2 className="main-title">
            Comprehensive Software Solutions
          </h2>
          <p className="main-description">
            From dealership management to service center operations, we provide end-to-end software solutions
            tailored for the automotive industry's unique needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`
                glass-card
                ${visibleItems.has(index) ? 'card-visible' : 'card-hidden'}
                ${getDelayClass(index)}
              `}
            >
              <div className="card-content">
                {/* Icon Container with Glow Effect */}

                <div className="icon-container">
                  <div className="flex flex-row gap-4 items-center w-fit mx-auto">
                    <div className="text-blue-400 text-3xl mb-2">
                      {service.icon}
                    </div>
                    <h3 className="text-white font-semibold">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}

                <p className="text-1xl text-white">
                  {service.description}
                </p>

                {/* Hover Accent Line */}
                <div className="accent-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
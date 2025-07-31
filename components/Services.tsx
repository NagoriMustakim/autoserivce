import { 
  Settings, 
  Users, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Database,
  Wrench,
  Car,
  CreditCard
} from 'lucide-react';

const services = [
  {
    icon: <Car className="w-8 h-8" />,
    title: "Dealership Management",
    description: "Complete CRM and inventory management system for automotive dealerships with sales tracking and customer management."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Service Center Solutions",
    description: "Streamline workshop operations with appointment scheduling, work order management, and technician tracking."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Inventory Management",
    description: "Real-time parts inventory tracking, automated reordering, and supplier management for optimal stock levels."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics & Reporting",
    description: "Comprehensive business intelligence with custom dashboards, performance metrics, and predictive analytics."
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

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0b0c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From dealership management to service center operations, we provide end-to-end software solutions 
            tailored for the automotive industry's unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-lg hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
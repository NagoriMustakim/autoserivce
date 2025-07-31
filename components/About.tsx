import { Award, Users, Globe, Zap } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "500+",
    label: "Satisfied Clients",
    description: "Automotive businesses trust our solutions"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    number: "25+",
    label: "Countries Served",
    description: "Global reach with local support"
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "15+",
    label: "Years Experience",
    description: "Deep automotive industry expertise"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    number: "99.9%",
    label: "System Uptime",
    description: "Reliable and robust infrastructure"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0b0c19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leading the Digital Transformation of Automotive Industry
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                AutoService has been at the forefront of automotive software innovation for over 15 years. 
                We understand the unique challenges faced by automotive businesses and deliver solutions 
                that drive efficiency, profitability, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of industry experts and software engineers work closely with clients to develop 
                customized solutions that integrate seamlessly with existing workflows and scale with 
                business growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Why Choose AutoService?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Industry-specific expertise and deep domain knowledge</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Scalable solutions that grow with your business</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 support and comprehensive training programs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Proven track record with measurable ROI</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-700"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
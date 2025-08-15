import { CheckCircle } from 'lucide-react';

const solutions = [
  {
    image: "🚗",
    title: "Dealership Management",
    description: "Complete solution for auto dealerships",
    features: [
      "Inventory management system",
      "Customer relationship management",
      "Sales tracking and analytics",
      "Service appointment scheduling",
      "Financial reporting dashboard",
      "Multi-location support",
      "Staff management tools",
      "Document management system"
    ]
  },
  {
    image: "🔧",
    title: "Service Center Solution",
    description: "Streamline your workshop operations",
    features: [
      "Work order management",
      "Technician scheduling",
      "Parts inventory tracking",
      "Customer communication portal",
      "Quality control checklists",
      "Billing and invoicing",
      "Performance analytics",
      "Mobile app integration"
    ]
  },
  {
    image: "📱",
    title: "Mobile Applications",
    description: "Custom mobile apps for your business",
    features: [
      "Native iOS and Android apps",
      "Real-time notifications",
      "Offline functionality",
      "User-friendly interface",
      "Secure authentication",
      "Cloud synchronization",
      "Analytics integration",
      "Custom branding options"
    ]
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tailored Solutions for Every Business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you&apos;re a small service center or a large automotive manufacturer,
            our solutions scale to meet your specific business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-center">
                <div className="text-6xl mb-4">{solution.image}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-blue-100">
                  {solution.description}
                </p>
              </div>

              <div className="p-8">
                <ul className="space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
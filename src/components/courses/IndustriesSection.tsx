import { Smartphone, Heart, DollarSign, ShoppingBag, Gamepad2, Car, Plane, Home } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    { name: "Technology", icon: Smartphone, color: "text-blue-600 bg-blue-100" },
    { name: "Healthcare", icon: Heart, color: "text-red-600 bg-red-100" },
    { name: "Finance", icon: DollarSign, color: "text-green-600 bg-green-100" },
    { name: "E-commerce", icon: ShoppingBag, color: "text-purple-600 bg-purple-100" },
    { name: "Gaming", icon: Gamepad2, color: "text-orange-600 bg-orange-100" },
    { name: "Automotive", icon: Car, color: "text-gray-600 bg-gray-100" },
    { name: "Travel", icon: Plane, color: "text-teal-600 bg-teal-100" },
    { name: "Real Estate", icon: Home, color: "text-indigo-600 bg-indigo-100" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries You Can Work In</h2>
          <p className="text-xl text-gray-600">UI/UX designers are in demand across all industries</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 rounded-full ${industry.color} flex items-center justify-center mx-auto mb-4`}>
                <industry.icon className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-gray-900">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
import { TrendingUp } from 'lucide-react';

// Define the type for individual career
export interface Career {
  role: string;
  salary: string;
  growth: string;
}

// Define the props structure
interface CareerOpportunitiesProps {
  careers: Career[];
}

const CareerOpportunities: React.FC<CareerOpportunitiesProps> = ({ careers }) => {
  if (!careers || careers.length === 0) {
    return null; // Optionally render nothing or a fallback message
  }

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
          <p className="text-xl text-gray-600">Explore the exciting career paths available in this course</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <div
                key={index}
                className="bg-white p-6 rounded-lg border border-green-200 hover:shadow-xl transition-shadow"
              >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">{career.role}</h3>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Salary Range:</span>
                  <span className="font-semibold text-orange-600">{career.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Growth:</span>
                  <span className={`font-semibold ${
                    career.growth === 'Excellent' ? 'text-green-600' :
                    career.growth === 'Very High' ? 'text-blue-600' : 'text-teal-600'
                  }`}>{career.growth}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;

import { BarChart3 } from 'lucide-react';

const SalaryInsights = () => {
  const salaryData = [
    { role: 'Software Engineer', min: 6, avg: 12, max: 24, demand: 'High' },
    { role: 'Data Analyst', min: 4, avg: 8, max: 16, demand: 'High' },
    { role: 'UI/UX Designer', min: 3, avg: 7, max: 14, demand: 'Medium' },
    { role: 'Digital Marketer', min: 3, avg: 6, max: 12, demand: 'Medium' },
    { role: 'Cloud Engineer', min: 8, avg: 14, max: 22, demand: 'Very High' },
    { role: 'Product Manager', min: 10, avg: 18, max: 35, demand: 'High' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Salary Insights & <span className='text-teal-600'>Job Trends</span> 
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real market data to help you make informed career decisions
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
          <div className="flex items-center mb-8">
            <BarChart3 className="w-6 h-6 text-teal-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Salary Ranges by Role</h3>
          </div>
          
          <div className="space-y-8">
            {salaryData.map((item, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 text-lg">{item.role}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.demand === 'Very High' ? 'bg-red-100 text-red-800' :
                    item.demand === 'High' ? 'bg-orange-100 text-orange-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.demand} Demand
                  </span>
                </div>
                
                <div className="relative">
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                      style={{ width: `${(item.avg / item.max) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>₹{item.min} LPA</span>
                    <span className="font-semibold">₹{item.avg} LPA</span>
                    <span>₹{item.max} LPA</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">65%</div>
              <div className="text-sm text-gray-600">Salary Increase Post-Training</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">3.2x</div>
              <div className="text-sm text-gray-600">Average Career Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">180</div>
              <div className="text-sm text-gray-600">Days Avg. Job Search</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">92%</div>
              <div className="text-sm text-gray-600">Job Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryInsights;
import { CheckCircle } from 'lucide-react';

const WhatYoullLearn = () => {
  const learningOutcomes = [
    ""
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skills that will make you job-ready in the UI/UX design field
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {learningOutcomes.map((outcome, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
import { GraduationCap, Clock, Trophy, MessageCircle, CheckCircle } from 'lucide-react';

const EligibilityCriteria = () => {
  const criteria = [
    {
      icon: GraduationCap,
      title: 'Educational Background',
      requirement: 'Any Graduate/Diploma',
      description: 'Open to all educational backgrounds - we focus on skills, not just degrees'
    },
    {
      icon: Clock,
      title: 'Minimum Attendance',
      requirement: '80% Course Attendance',
      description: 'Regular participation ensures you get the most out of our program'
    },
    {
      icon: Trophy,
      title: 'Project Completion',
      requirement: 'Complete Capstone Project',
      description: 'Demonstrate your skills through real-world project implementation'
    },
    {
      icon: MessageCircle,
      title: 'Communication Assessment',
      requirement: 'Basic English Proficiency',
      description: 'Effective communication skills for professional environments'
    }
  ];

  const benefits = [
    'Job Guarantee Program',
    'Unlimited Interview Opportunities',
    'Salary Negotiation Support',
    'Career Transition Guidance',
    'Alumni Network Access',
    'Continuous Learning Resources'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Placement <span className='text-teal-600'>Eligibility Criteria</span> 
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple requirements to qualify for our comprehensive placement support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eligibility criteria */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Requirements</h3>
            {criteria.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <div className="text-orange-500 font-semibold mb-3">{item.requirement}</div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">What You Get</h3>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success rate */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-green-500 mb-3">100%</div>
                <div className="text-xl font-bold text-gray-900 mb-3">Success Rate</div>
                <p className="text-gray-600">
                  Students who meet our criteria successfully secure placements within 6 months
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-colors">
                Check Your Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
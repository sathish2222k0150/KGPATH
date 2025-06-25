import { Award, Target, CheckCircle, Users, Clock, BookOpen } from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-teal-600">KGPath</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing you with the best learning experience 
            and the support you need to achieve your career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Certified Trainers",
              description: "Learn from industry experts with real-world experience and proven track records.",
              color: "bg-blue-100 text-blue-600"
            },
            {
              icon: Target,
              title: "Placement Support",
              description: "Get dedicated career support with job placement assistance and interview preparation.",
              color: "bg-green-100 text-green-600"
            },
            {
              icon: CheckCircle,
              title: "Hands on Training",
              description: "Gain real-world experience through project-based, hands-on training guided by industry experts.",
              color: "bg-purple-100 text-purple-600"
            },
            {
              icon: Users,
              title: "Small Class Sizes",
              description: "Enjoy personalized attention with our limited batch sizes and dedicated mentors.",
              color: "bg-orange-100 text-orange-600"
            },
            {
              icon: Clock,
              title: "Flexible Learning",
              description: "Study at your own pace with our flexible schedules and recorded sessions.",
              color: "bg-pink-100 text-pink-600"
            },
            {
              icon: BookOpen,
              title: "Updated Curriculum",
              description: "Stay current with industry trends through our regularly updated course content.",
              color: "bg-teal-100 text-teal-600"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-8 rounded-2xl border border-teal-100 hover:shadow-lg hover:shadow-teal-200 transition-shadow bg-white">
              <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Users, Award, TrendingUp, BadgeCheck } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    { number: "50+", label: "Students Trained", icon: Users },
    { number: "20+", label: "Expert Trainers", icon: Award },
    { number: "100%", label: "Placement Rate", icon: TrendingUp },
    { number: "50+", label: "Students Placed", icon: BadgeCheck },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg hover:shadow-teal-100 border border-teal-200 transition-shadow">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
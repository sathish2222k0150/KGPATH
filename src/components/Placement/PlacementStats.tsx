import { useEffect, useState } from 'react';
import { TrendingUp, Users, Building, MapPin, Award, Target } from 'lucide-react';

const PlacementStats = () => {
  const [counters, setCounters] = useState({
    students: 0,
    companies: 0,
    package: 0,
    locations: 0,
    placementRate: 0,
    avgPackage: 0
  });

  const finalValues = {
    students: 50,
    companies: 100,
    package: 24,
    locations: 15,
    placementRate: 100,
    avgPackage: 8
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues).map(key => {
      const finalValue = finalValues[key as keyof typeof finalValues];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => intervals.forEach(clearInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = [
    {
      icon: Users,
      value: counters.students,
      suffix: '+',
      label: 'Students Placed',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Building,
      value: counters.companies,
      suffix: '+',
      label: 'Hiring Partners',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: TrendingUp,
      value: counters.package,
      suffix: ' LPA',
      label: 'Highest Package',
      color: 'bg-orange-50 text-orange-600',
      prefix: '₹'
    },
    {
      icon: MapPin,
      value: counters.locations,
      suffix: '+',
      label: 'Cities',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Award,
      value: counters.placementRate,
      suffix: '%',
      label: 'Placement Rate',
      color: 'bg-teal-50 text-teal-600'
    },
    {
      icon: Target,
      value: counters.avgPackage,
      suffix: ' LPA',
      label: 'Average Package',
      color: 'bg-red-50 text-red-600',
      prefix: '₹'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Placement Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for themselves - real outcomes from real students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-teal-200 hover:border-gray-200 hover:shadow-lg hover:shadow-teal-200 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-7 h-7" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-900">
                  {stat.prefix}{stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementStats;
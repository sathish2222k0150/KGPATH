import React from 'react';
import { coursesData } from '../Data/coursesData'; // adjust path if needed

interface HiringPartnersProps {
  courseId: number;
}

const HiringPartners: React.FC<HiringPartnersProps> = ({ courseId }) => {
  const course = coursesData.find(course => course.id === courseId);

  if (!course || !course.hiringPartners?.length) return null;

  // Duplicate for infinite scroll illusion
  const scrollingPartners = [...course.hiringPartners, ...course.hiringPartners];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Partners</h2>
          <p className="text-xl text-gray-600">Join graduates working at top companies worldwide</p>
        </div>

        {/* Row 1 - Left to Right */}
        <div className="relative w-full overflow-hidden mb-6">
          <div className="animate-scroll-right flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="min-w-[160px] bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-lg font-bold text-gray-600">{partner}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-scroll-left flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="min-w-[160px] bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-lg font-bold text-gray-600">{partner}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Rate */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            100% Placement Rate
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HiringPartners;

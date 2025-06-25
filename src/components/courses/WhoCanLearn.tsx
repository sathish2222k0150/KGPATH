import React from 'react';
import { getCourseById } from '../Data/coursesData';
import { LearningCard } from '../Data/coursesData'; // Import from coursesData now

interface WhoCanLearnProps {
  courseId: number; // Add courseId prop to fetch specific course data
}

const LearningCardComponent: React.FC<{ card: LearningCard }> = ({ card }) => {
  const IconComponent = card.icon;
  
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
      <div className="flex flex-col items-start space-y-4">
        <div className="w-16 h-16 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-100 transition-colors duration-300">
          <IconComponent className="w-8 h-8 text-teal-600" strokeWidth={1.5} />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900 leading-tight">
            {card.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhoCanLearn: React.FC<WhoCanLearnProps> = ({ courseId }) => {
  // Get the specific course data
  const course = getCourseById(courseId);
  
  if (!course) {
    return <div>Course not found</div>;
  }

  const { whoCanLearn } = course;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium text-teal-600 tracking-wide uppercase">
                {whoCanLearn.sectionTitle}
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight "
                dangerouslySetInnerHTML={{ __html: whoCanLearn.mainHeading }}
              />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              {whoCanLearn.description}
            </p>
          </div>

          {/* Right Content - Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoCanLearn.cards.map((card) => (
              <LearningCardComponent key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanLearn;
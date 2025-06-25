import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';
import { coursesData } from '../Data/coursesData'; // Adjust the path as needed

interface CourseGridProps {
  onCourseClick: (courseId: number) => void;
}

const CourseGrid: React.FC<CourseGridProps> = ({ onCourseClick }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {course.popular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                  {course.new && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {course.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{course.level}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{course.subtitle}</p>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-teal-600">{course.fee}</span>
                    {course.originalFee && (
                      <span className="text-sm text-gray-500 line-through">
                        {course.originalFee}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => onCourseClick(course.id)}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium flex items-center group"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium">
            Load More Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;

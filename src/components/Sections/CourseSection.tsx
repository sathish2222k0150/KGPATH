import { Star, Clock, Users } from 'lucide-react';
import { coursesData } from '../Data/coursesData';
import { Link } from 'react-router-dom';

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-teal-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated selection of industry-relevant courses, 
            designed by experts and updated regularly to match current market demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
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
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                
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
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-teal-600">{course.fee}</div>
                  <Link to={`/courses/${course.id}`}>
                    <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/courses">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg">
              View All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

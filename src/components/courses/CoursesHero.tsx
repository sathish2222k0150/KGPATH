import { Search, Filter } from 'lucide-react';

const CoursesHero = () => {
  return (
    <section className="pt-20 lg:pt-24 bg-gradient-to-br from-teal-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose from a range of certified skill-based programs designed to advance your career
          </p>
          
          {/* Course Count Stat */}
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-lg mb-8">
            <span className="text-teal-600 font-bold text-lg">50+</span>
            <span className="text-gray-600 ml-2">career courses available</span>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>All Categories</option>
              <option>Technology</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Business</option>
            </select>
            
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Duration</option>
              <option>1-3 months</option>
              <option>3-6 months</option>
              <option>6+ months</option>
            </select>
            
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Fee Range</option>
              <option>Free</option>
              <option>$0-$200</option>
              <option>$200-$500</option>
              <option>$500+</option>
            </select>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Online/Offline</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
            
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
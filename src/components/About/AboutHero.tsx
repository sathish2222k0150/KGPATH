import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Empowering Learners 
              <span className="text-teal-600"> Since 2025</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
              Our story begins with education - transforming lives through innovative learning experiences 
              and building the workforce of tomorrow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/placement">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center group">
              Explore Our Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-600 hover:text-white transition-colors font-semibold text-lg flex items-center justify-center">
              <Play className="mr-2 w-5 h-5" />
              Watch Our Story
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20"></div>
    </section>
  );
};

export default AboutHero;
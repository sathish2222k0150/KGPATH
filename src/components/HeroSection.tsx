import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HomeHero from '../assets/home hero.png';
import men1 from '../assets/men1.png';
import men2 from '../assets/men2.png';
import women1 from '../assets/women1.jpg';
import women2 from '../assets/women2.png';
import women3 from '../assets/women3.png';

export default function HeroSection() {
const userImages = [
    women1,
    men1,
    women2,
    men2,
    women3
  ];

  return (
    <section className="pt-20 lg:pt-24 bg-gradient-to-br from-teal-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering You with 
                <span className="text-teal-600"> Tech Skills</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Join thousands of learners advancing their careers with our expert-led courses. 
                Transform your future with industry-relevant skills and personalized mentorship.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
            <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center group">
              Explore Courses
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link to="/contact">
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-600 hover:text-white transition-colors font-semibold text-lg">
              Request Callback
            </button>
          </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                {userImages.map((src, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={src} // Replace with your image paths
                      alt={`User ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9</span>
                  </div>
                  <div>50k+ learners</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <div className="text-teal-600 font-semibold">Trusted by 500+ Companies</div>
                <div>Google • Microsoft • Amazon</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={HomeHero}
                alt="Professional learning environment" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-teal-400 to-teal-500 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
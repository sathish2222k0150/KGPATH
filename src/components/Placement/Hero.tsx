import { ArrowRight, Star, Users, Award, Building } from 'lucide-react';
import Placement from '../../assets/Placement.png';

const Hero = () => {
  const scrollToSection = () => {
    const element = document.getElementById('hiring-partners');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
              <Star className="w-4 h-4 text-orange-500 mr-2" />
              <span className="text-sm font-semibold text-orange-700">100% Placement Rate</span>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Launch Your
                <br />
                <span className="text-teal-600">Dream Career</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Join thousands of students who transformed their careers with our proven placement program. Real skills, real jobs, guaranteed results.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
              onClick={scrollToSection}
              className="group bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all flex items-center justify-center space-x-2"
            >
              <span>View Hiring Partners</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600 mt-1">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">₹24L</div>
                <div className="text-sm text-gray-600 mt-1">Highest Package</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600 mt-1">Hiring Partners</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <img
                src={Placement}
                alt="Students in placement training"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">50+</div>
                    <div className="text-xs text-gray-600">Placed</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Building className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">100+</div>
                    <div className="text-xs text-gray-600">Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
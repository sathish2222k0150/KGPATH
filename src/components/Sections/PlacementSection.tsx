import { Quote, ArrowRight } from 'lucide-react';
import { partners } from '../Data/partners';
import { Link } from 'react-router-dom';
import HomePlacement from '../../assets/Homeplacement.png';

export default function PlacementSection() {
  return (
    <section id="placement" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Placement Partners / <span className="text-teal-600">Recruiters</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our graduates join leading companies worldwide. We maintain strong relationships 
            with top employers to ensure the best career opportunities for our students.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left side - Image */}
          <div className="relative h-full">
            <img 
              src={HomePlacement} 
              alt="Professional workplace environment" 
              className="rounded-2xl shadow-xl w-full h-full object-cover min-h-[200px]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-teal-400 to-teal-500 rounded-2xl -z-10"></div>
          </div>

          {/* Right side - Company Logos and Content */}
          <div className="space-y-8 flex flex-col justify-between min-h-[400px]">
            {/* Company Logos Grid */}
            <div className="grid grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow hover:shadow-teal-200 border border-teal-100">
                  <div className="text-xl font-bold text-gray-600">
                    {partner}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Quote className="w-8 h-8 text-teal-600 mb-4" />
              <p className="text-lg text-gray-600 mb-4">
                "KGPath graduates consistently demonstrate exceptional skills and professionalism. 
                They're always our first choice for technical roles."
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-semibold"></span>
              </div>
            </div>

            {/* Redirection Button */}
            <div className="text-center">
              <Link to="/placement">
              <button className="bg-teal-600 text-white px-8 py-4 ml-2 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center mx-auto group">
                View All Placement Partners
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
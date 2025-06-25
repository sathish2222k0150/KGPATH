import { Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesCallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Need Help Choosing a Course?
        </h2>
        <p className="text-xl text-teal-100 mb-8">
          Our expert advisors are here to guide you towards the perfect career path
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center">
            <Phone className="mr-2 w-5 h-5" />
            Talk to Our Advisor
          </button>
          </Link>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg flex items-center justify-center">
            <MessageCircle className="mr-2 w-5 h-5" />
            Live Chat Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCallToAction;
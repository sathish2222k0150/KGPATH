import { Link } from 'react-router-dom';
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Join Our Journey of Excellence
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Be part of a community that's shaping the future of education and empowering 
          professionals worldwide to achieve their dreams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/courses">
          <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            Explore Our Courses
          </button>
          </Link>
          <Link to="/career">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg">
            Become a Trainer
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
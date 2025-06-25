import { Star, ArrowRight } from 'lucide-react';
import ApplyFormModal from '../courses/ApplyFormModal'; 
import { useState } from 'react';
const SuccessStories = () => {
  const [showModal, setShowModal] = useState(false);
  const stories = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      company: 'Amazon',
      package: '₹18 LPA',
      course: 'Full Stack Development',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The placement support was incredible. From resume building to mock interviews, they prepared me for everything.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      role: 'Data Analyst',
      company: 'Microsoft',
      package: '₹15 LPA',
      course: 'Data Science',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'I went from zero coding experience to landing my dream job. The structured approach really works.',
      rating: 5
    },
    {
      name: 'Sneha Patel',
      role: 'Cloud Engineer',
      company: 'Google',
      package: '₹22 LPA',
      course: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'The career guidance team helped me identify my strengths and guided me towards the perfect role.',
      rating: 5
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student <span className='text-teal-600'>Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real students, real transformations, real success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg hover:shadow-teal-200"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{story.name}</h3>
                  <p className="text-gray-600">{story.course}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{story.testimonial}"
              </p>

              {/* Job details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Role:</span>
                  <span className="font-semibold text-gray-900">{story.role}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Company:</span>
                  <span className="font-semibold text-gray-900">{story.company}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Package:</span>
                  <span className="font-bold text-orange-500">{story.package}</span>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-3 rounded-xl transition-colors flex items-center justify-center space-x-2 font-medium">
                <span>View Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
           <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                Apply Now
              </button>
        </div>
      </div>
      <ApplyFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default SuccessStories;
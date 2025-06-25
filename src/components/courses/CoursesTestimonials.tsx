import React from 'react';
import { Star, Quote } from 'lucide-react';

const CoursesTestimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.8/5</span>
          </div>
          <p className="text-gray-600">from 10,000+ verified learners</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              course: "Web Development",
              content: "The course structure was perfect and the instructors were incredibly supportive throughout my learning journey.",
              rating: 5,
              image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
            },
            {
              name: "Michael Chen",
              course: "Data Analytics",
              content: "Practical approach with real-world projects helped me land my dream job in just 3 months after completion.",
              rating: 5,
              image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
            },
            {
              name: "Emily Rodriguez",
              course: "Digital Marketing",
              content: "Comprehensive curriculum covering all aspects of digital marketing. The placement support was exceptional.",
              rating: 5,
              image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl">
              <Quote className="w-8 h-8 text-teal-600 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesTestimonials;
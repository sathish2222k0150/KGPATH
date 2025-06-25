import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../Data/testimonials';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-move testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">20,000+</span> Satisfied Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful graduates 
            have to say about their transformative learning experience.
          </p>
        </div>

        <div className="relative">
          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg h-full">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm text-teal-600">{testimonial.course}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-teal-600 mb-4" />
                    <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                    <div className="flex items-center mt-4">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
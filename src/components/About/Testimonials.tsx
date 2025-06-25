import { Quote, Star } from 'lucide-react';
import { Testimonial } from './type';

const Testimonials = () => {
  const testimonials: Testimonial[] = [
     {
      name: "Jennifer Lee",
      course: "Full Stack Development",
      outcome: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "KGPath's comprehensive curriculum and hands-on approach prepared me perfectly for my role at Google. The mentorship was invaluable."
    },
    {
      name: "Ahmed Hassan",
      course: "Data Analytics",
      outcome: "Data Scientist at Netflix",
      image: "https://images.pexels.com/photos/1043475/pexels-photo-1043475.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The practical projects and real-world case studies gave me the confidence to transition into data science successfully."
    },
    {
      name: "Lisa Wang",
      course: "Digital Marketing",
      outcome: "Marketing Director at Startup",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "From zero marketing knowledge to leading a team of 15. KGPath made this incredible journey possible."
    }
    // ... other testimonials
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-teal-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real students who transformed their careers with KGPath.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                  <p className="text-sm text-teal-600 font-medium">{testimonial.outcome}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
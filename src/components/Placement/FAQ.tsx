import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you guarantee job placement?',
      answer: 'Yes, we offer a job guarantee for students who complete our program with 80% attendance, finish their capstone project, and meet our eligibility criteria. We provide unlimited interview opportunities until you secure a position.'
    },
    {
      question: 'What is the average salary package for placed students?',
      answer: 'Our students receive competitive packages ranging from ₹4-24 LPA depending on the role and experience. The average package across all tracks is ₹8-12 LPA, with many students receiving significant salary increases from their previous roles.'
    },
    {
      question: 'How long does it take to get placed after course completion?',
      answer: 'Most of our students secure job offers within 3-6 months of course completion. However, the timeline can vary based on individual performance, market conditions, and specific role requirements.'
    },
    {
      question: 'What kind of placement support do you provide?',
      answer: 'We offer comprehensive placement support including resume building, mock interviews, LinkedIn optimization, soft skills training, job matching, and dedicated career coaching. Our support continues even after you get placed.'
    },
    {
      question: 'Which companies hire from your program?',
      answer: 'We have partnerships with 100+ companies including major MNCs like Amazon, Google, Microsoft, TCS, Infosys, and growing startups. Our students are placed across various industries and company sizes.'
    },
    {
      question: 'What if I don\'t get placed within the guarantee period?',
      answer: 'If you meet all eligibility criteria and don\'t secure a placement within 6 months, we extend our support until you get placed. We also provide additional training and skill enhancement if needed.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently <span className='text-teal-600'>Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our placement program
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-8 pb-6 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <Link to={"/contact"}>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Contact Support
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
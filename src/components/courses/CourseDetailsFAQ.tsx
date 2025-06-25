import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const CourseDetailsFAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need prior design experience?",
      answer: "No prior design experience is required. This course is designed for complete beginners and will take you from basics to advanced concepts step by step."
    },
    {
      question: "Will I get placement support?",
      answer: "Yes, we provide comprehensive placement support including resume building, portfolio review, interview preparation, and direct connections with our hiring partners."
    },
    {
      question: "What software will I learn?",
      answer: "You'll master industry-standard tools including Figma, Adobe XD, Sketch, InVision, and Principle. We also cover basic HTML/CSS for better developer collaboration."
    },
    {
      question: "Is this course suitable for working professionals?",
      answer: "Absolutely! We offer flexible timings including evening and weekend batches specifically designed for working professionals."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You'll work on real-world projects including mobile app designs, website redesigns, and complete user experience case studies that you can showcase in your portfolio."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about this course</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {expandedFaq === index ? (
                  <Minus className="w-5 h-5 text-orange-600" />
                ) : (
                  <Plus className="w-5 h-5 text-orange-600" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsFAQ;
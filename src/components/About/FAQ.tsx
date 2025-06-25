import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ } from './type';

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Are your courses government certified?",
      answer: "Yes, all our courses are accredited by relevant government bodies and industry organizations. We maintain ISO 9001:2015 certification for quality management."
    },
    {
      question: "What makes KGPath different from other institutions?",
      answer: "Our unique combination of industry-expert trainers, hands-on projects, personalized mentorship, and strong placement support sets us apart. We focus on practical skills that employers value."
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Absolutely! We have dedicated placement teams, partnerships with 500+ companies, and provide comprehensive career support including resume building, interview preparation, and job matching."
    },
    {
      question: "Can I visit your campus?",
      answer: "Yes, we welcome campus visits! You can schedule a tour to see our facilities, meet our trainers, and experience our learning environment firsthand."
    },
    {
      question: "What is your teaching methodology?",
      answer: "We follow a blended learning approach combining live interactive sessions, hands-on projects, peer collaboration, and personalized mentorship to ensure comprehensive skill development."
    }
    // ... other FAQs
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about KGPath and our programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {expandedFaq === index ? (
                  <Minus className="w-5 h-5 text-teal-600" />
                ) : (
                  <Plus className="w-5 h-5 text-teal-600" />
                )}
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
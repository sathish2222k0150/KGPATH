import { Plus, Minus } from 'lucide-react';
import { faqs } from '../Data/faqs';
import { useState } from 'react';

export default function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need Help? Check Our <span className="text-teal-600">FAQs</span>
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to the most commonly asked questions about our courses and programs.
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
}
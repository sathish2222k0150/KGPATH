import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success State */}
          {isSubscribed && (
            <div className="mb-8 animate-bounce">
              <CheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Welcome aboard! 🎉</h3>
              <p className="text-orange-600">You'll receive our best insights straight to your inbox.</p>
            </div>
          )}
          
          {/* Default State */}
          {!isSubscribed && (
            <>
              <div className="mb-8">
                <Mail className="w-16 h-16 text-teal-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-black mb-4">
                  Get <span className='text-teal-600'>Learning Insights</span> in Your Inbox
                </h2>
                <p className="text-xl text-orange-400 mb-2">
                  Join 10,000+ learners getting weekly tips, trends, and success stories
                </p>
                <p className="text-black-200 text-sm">
                  No spam. Only valuable content. Unsubscribe anytime.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-6 py-4 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-secondary hover:opacity-90 text-white font-semibold rounded-lg transition-opacity duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe Now
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center justify-center space-x-8 text-blue-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">10K+</div>
                  <div className="text-sm text-black">Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">Weekly</div>
                  <div className="text-sm text-black">Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">4.9★</div>
                  <div className="text-sm text-black">Rating</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-200 to-blue-200 text-black ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='0' cy='30' r='4'/%3E%3Ccircle cx='60' cy='30' r='4'/%3E%3Ccircle cx='30' cy='0' r='4'/%3E%3Ccircle cx='30' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Insights, Tips & Trends in{' '}
            <span className="text-orange-400">
              Education
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-12 text-orange-600 opacity-90 animate-fade-in-delay-1">
            Explore learning strategies, career advice, and student success stories
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto animate-fade-in-delay-2">
            <form onSubmit={handleSearch} className="relative">
              <div className={`relative transition-all duration-300 ${
                isFocused ? 'transform scale-105' : ''
              }`}>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="w-full px-6 py-4 pl-14 pr-16 text-lg text-gray-800 bg-white rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50 transition-all duration-300"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-200  text-white p-2 rounded-full transition-opacity duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
          
          {/* Popular Search Terms */}
          <div className="mt-8 animate-fade-in-delay-3">
            <p className="text-orange-600 mb-4">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Career Tips', 'Online Learning', 'Study Methods', 'AI in Education'].map((term) => (
                <button
                  key={term}
                  onClick={() => onSearch(term)}
                  className=" text-orange-600 px-4 py-2 bg-orange-100  rounded-full hover:bg-orange-300 transition-all duration-200 text-sm backdrop-blur-sm border border-white border-opacity-20 hover:text-white"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}
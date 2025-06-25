import { ArrowRight, Star, Users } from 'lucide-react';

export default function InlineCTA() {
  return (
    <div className="my-12 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 text-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to Level Up <span className='text-teal-600'>Your Skills?</span></h3>
        <p className="text-orange-600 mb-6 text-lg">
          Join thousands of learners who've transformed their careers with our expert-led courses.
        </p>
        
        {/* Stats */}
        <div className="flex justify-center items-center space-x-8 mb-6">
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-teal-600" />
            <span className="text-sm text-teal-600">50K+ Students</span>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm text-teal-600">4.9/5 Rating</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-secondary text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-semibold flex items-center justify-center">
            Explore Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="px-8 py-3 bg-teal-600  text-white rounded-lg hover:bg-teal-800 transition-all duration-200 font-semibold backdrop-blur-sm">
            Talk to Expert
          </button>
        </div>
      </div>
    </div>
  );
}
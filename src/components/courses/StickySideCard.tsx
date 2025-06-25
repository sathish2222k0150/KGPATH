import { Clock, Monitor, GraduationCap } from 'lucide-react';
import { Course } from '../Data/coursesData';
import ApplyFormModal from './ApplyFormModal';
import React, { useState } from 'react';

interface StickySideCardProps {
  course: Course;
}

const StickySideCard: React.FC<StickySideCardProps> = ({ course }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
      <div className="space-y-6">
        {/* Course Fee */}
        <div className="text-center border-b pb-6">
          <div className="text-3xl font-bold text-gray-900 mb-2">{course.fee}</div>
          <div className="text-gray-600 mb-4">One-time payment</div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-orange-600 font-semibold">{course.emi}</div>
            <div className="text-sm text-orange-500">{course.month}</div>
          </div>
        </div>

        {/* Course Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-teal-600" />
            <div>
              <div className="font-medium text-gray-900">{course.duration}</div>
              <div className="text-sm text-gray-600"></div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Monitor className="w-5 h-5 text-teal-600" />
            <div>
              <div className="font-medium text-gray-900">Mode</div>
              <div className="text-sm text-gray-600">{course.mode}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-5 h-5 text-teal-600" />
            <div>
              <div className="font-medium text-gray-900">Eligibility</div>
              <div className="text-sm text-gray-600">{course.eligibility}</div>
            </div>
          </div>
        </div>

        {/* Apply Now Button */}
        <button
        onClick={() => setShowModal(true)}
        className="bg-orange-500 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-base md:text-lg"
         >
         Apply Now
        </button>

        <button className="w-full border border-teal-600 text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold">
          Download Brochure
        </button>
        <ApplyFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
        {/* Enrollment Process */}
        <div className="border-t pt-6">
          <h4 className="font-bold text-gray-900 mb-4">Enrollment Process</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
              <span className="text-sm text-gray-700">Fill Application</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
              <span className="text-sm text-gray-700">Get Counselling</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
              <span className="text-sm text-gray-700">Pay Fees</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
              <span className="text-sm text-gray-700">Start Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default StickySideCard;
import React from 'react';
import { Clock, Calendar, CreditCard, Percent } from 'lucide-react';

const CourseFeeSchedule = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Fee & Schedule</h2>
          <p className="text-xl text-gray-600">Flexible payment options and convenient timings</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fee Structure */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fee Structure</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                <div>
                  <h4 className="font-bold text-gray-900">Course Fee</h4>
                  <p className="text-sm text-gray-600">One-time payment</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-teal-600">$249</div>
                  <div className="text-sm text-gray-500 line-through">$349</div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-teal-600" />
                  EMI Options
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>3 Months EMI</span>
                    <span className="font-bold">$89/month</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>6 Months EMI</span>
                    <span className="font-bold">$49/month</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Percent className="w-5 h-5 mr-2 text-teal-600" />
                  Special Offers
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Early Bird Discount: 30% off (Limited Time)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Student Discount: Additional 10% off</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Group Enrollment: 15% off for 3+ students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule & Duration</h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">120 Hours</div>
                  <div className="text-sm text-gray-600">Total Duration</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">3 Days/Week</div>
                  <div className="text-sm text-gray-600">Class Frequency</div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 mb-4">Available Batches</h4>
                <div className="space-y-3">
                  <div className="p-4 border border-teal-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Morning Batch</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Available</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Time: 9:00 AM - 12:00 PM</div>
                      <div>Start Date: January 15, 2025</div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-teal-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Evening Batch</span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">Filling Fast</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Time: 6:00 PM - 9:00 PM</div>
                      <div>Start Date: January 20, 2025</div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-teal-200 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Weekend Batch</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Available</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Time: 10:00 AM - 4:00 PM (Sat & Sun)</div>
                      <div>Start Date: January 25, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFeeSchedule;
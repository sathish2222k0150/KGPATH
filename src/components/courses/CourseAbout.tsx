import { Target, Users, Wrench } from 'lucide-react';

const CourseAbout = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Course</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  This comprehensive UI/UX Design course is designed to transform you into a skilled 
                  designer capable of creating exceptional user experiences. You'll learn the complete 
                  design process from user research to final implementation.
                </p>
                <p>
                  Our curriculum covers both theoretical foundations and practical applications, 
                  ensuring you understand not just how to use design tools, but why certain 
                  design decisions work better than others.
                </p>
                <p>
                  By the end of this course, you'll have a portfolio of real-world projects 
                  and the confidence to tackle any design challenge in your career.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Who This Course Is For</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Career Changers</h4>
                    <p className="text-gray-600">Professionals looking to transition into UX/UI design</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Beginners</h4>
                    <p className="text-gray-600">Complete beginners with no prior design experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="w-6 h-6 text-teal-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Developers</h4>
                    <p className="text-gray-600">Developers wanting to add design skills to their toolkit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-gray-50 p-6 rounded-2xl h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Course Features</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-700">Live Interactive Sessions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-700">Hands-on Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-700">Industry Mentorship</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-700">Portfolio Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                <span className="text-gray-700">Job Placement Support</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-teal-200">
              <h4 className="font-bold text-gray-900 mb-2">Next Batch Starts</h4>
              <p className="text-teal-600 font-semibold">January 15, 2025</p>
              <p className="text-sm text-gray-600 mt-1">Limited seats available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAbout;
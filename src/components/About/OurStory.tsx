import { Calendar } from 'lucide-react';
import { Timeline } from './Timeline';
import CEO from '../../assets/ceo.png';

const OurStory = () => {

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid with image on the left and content on the right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <img
              src={CEO}
              alt="KGPath journey"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl w-full h-auto"
            />

            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg z-10">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-teal-600" />
                <div>
                  <div className="font-bold text-gray-900 ">5+ Years</div>
                  <div className="text-sm text-gray-600">of Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-teal-600">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                 Our journey began in 2019 with Sharadha Skill Academy, where we equipped hundreds of learners with essential digital and professional skills. 
                 As the tech landscape evolved, so did our vision.
                </p>
                <p>
                  But as technology advanced and industry demands grew, so did our vision.
                </p>
                <p>
                  In 2025, we launched KG PATH - A next-gen training academy dedicated to empowering individuals with advanced, job-ready skills. 
                  Built on the strong foundation of our earlier work, KG PATH blends hands-on learning, expert mentorship, and personalized career support to help learners not just gain knowledge - but build meaningful, lasting careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="mt-20">
       <Timeline/>
       </div>
      </div>
    </section>
  );
};

export default OurStory;

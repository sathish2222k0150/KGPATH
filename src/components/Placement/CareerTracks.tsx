import { Code, Database, Palette } from 'lucide-react';
import ApplyFormModal from '../courses/ApplyFormModal';
import { useState } from 'react';


const CareerTracks = () => {
  const [showModal, setShowModal] = useState(false);
  const tracks = [
    {
      icon: Code,
      title: 'Software Engineer',
      description: 'Build scalable applications and work with cutting-edge technologies',
      avgPackage: '₹8-15 LPA',
      skills: ['JavaScript', 'React', 'Node.js', 'Python'],
      companies: ['Google', 'Amazon', 'Microsoft']
    },
    {
      icon: Database,
      title: 'Data Analyst',
      description: 'Turn data into actionable insights for business decisions',
      avgPackage: '₹6-12 LPA',
      skills: ['SQL', 'Python', 'Tableau', 'Excel'],
      companies: ['Flipkart', 'Zomato', 'Paytm']
    },
    {
      icon: Palette,
      title: 'UI/UX Designer',
      description: 'Create beautiful and intuitive user experiences',
      avgPackage: '₹5-10 LPA',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
      companies: ['Swiggy', 'Ola', 'PhonePe']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Career <span className='text-teal-600'> Tracks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your path and we'll guide you to success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <track.icon className="w-7 h-7 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{track.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{track.description}</p>

              {/* Package */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="text-sm text-gray-600 mb-1">Average Package</div>
                <div className="text-lg font-bold text-gray-900">{track.avgPackage}</div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-3">Key Skills</div>
                <div className="flex flex-wrap gap-2">
                  {track.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Companies */}
              <div className="mb-8">
                <div className="text-sm font-semibold text-gray-700 mb-2">Top Hiring Companies</div>
                <div className="text-sm text-gray-600">
                  {track.companies.join(', ')}
                </div>
              </div>

              {/* CTA */}
              <button
              onClick={() => setShowModal(true)}
              className="w-full bg-gradient-primary text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                Explore Track
              </button>
            </div>
          ))}
        </div>
      </div>
      <ApplyFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default CareerTracks;
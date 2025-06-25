import classes from '../../assets/classes.png';
import classroom from '../../assets/class.png';
import { Play } from 'lucide-react';
import sessions from '../../assets/sessions.png';

const CampusTour = () => {
  const facilities = [
    {
    title: "Expert-led Classes",
    image: classes,
    description: "Learn from industry professionals with years of real-world experience and a passion for teaching."
  },
  {
    title: "Real-Time Project Work",
    image: classroom,
    description: "Gain hands-on experience by working on live projects that simulate real industry challenges."
  },
  {
    title: "Online & Offline Sessions",
    image: sessions,
    description: "Flexible learning options that fit your schedule — attend sessions from anywhere or join us on campus."
  }
    
    // ... other facilities
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience Our <span className="text-teal-600">Learning Environment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step into a space designed for growth, creativity, and real-world skill-building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={facility.image} 
                  alt={facility.title} 
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{facility.title}</h3>
                  <p className="text-sm opacity-90">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg flex items-center justify-center mx-auto group">
            <Play className="mr-2 w-5 h-5" />
            Take Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default CampusTour;
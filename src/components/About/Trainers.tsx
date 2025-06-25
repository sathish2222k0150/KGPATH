import { Star } from 'lucide-react';
import { Trainer } from './type';

const Trainers = () => {
  const trainers: Trainer[] = [
    {
      name: "Alex Thompson",
      subject: "Web Development",
      experience: "Ex-Google, 12+ years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.9,
      students: "2.5k+"
    },
    {
      name: "Priya Sharma",
      subject: "Data Science",
      experience: "Ex-Microsoft, 10+ years",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.8,
      students: "1.8k+"
    },
    {
      name: "James Wilson",
      subject: "Digital Marketing",
      experience: "Ex-Facebook, 8+ years",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.9,
      students: "3.2k+"
    },
    {
      name: "Maria Garcia",
      subject: "UI/UX Design",
      experience: "Ex-Apple, 15+ years",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.7,
      students: "2.1k+"
    },
    {
      name: "Robert Chen",
      subject: "Cloud Computing",
      experience: "Ex-Amazon, 11+ years",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 4.8,
      students: "1.5k+"
    }
    // ... other trainers
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-teal-600">Expert Trainers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry veterans who bring real-world experience and cutting-edge knowledge 
            to every session.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {trainer.experience}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-teal-600 font-medium text-sm mb-3">{trainer.subject}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{trainer.rating}</span>
                  </div>
                  <div className="text-gray-600">{trainer.students} students</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
            View All Trainers
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trainers;
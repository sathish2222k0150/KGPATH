import { CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "Meta Front-End Developer (Coursera / Meta)",
    "MongoDB Certified Developer Associate",
    "TensorFlow Developer Certificate (Google)",
    "Microsoft Certified: Azure AI Engineer Associate",
    "AWS Certified Solutions Architect – Associate",
    "Google Associate Cloud Engineer"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications & <span className="text-teal-600">Partnerships</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our accreditations and partnerships ensure you receive industry-recognized education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{cert}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold">
            Download Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
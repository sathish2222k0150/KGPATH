import { Link } from "react-router-dom";

const HiringPartners = () => {
  const partners = [
    'Amazon', 'Google', 'Microsoft', 'TCS', 'Infosys', 'Wipro',
    'Accenture', 'Cognizant', 'HCL', 'Zoho', 'Flipkart', 'Paytm',
    'IBM', 'Oracle', 'Salesforce', 'Adobe', 'Intel', 'Cisco'
  ];

  // Duplicate the array for seamless scroll effect
  const scrollingPartners = [...partners, ...partners];

  return (
    <section id="hiring-partners" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading companies trust us to provide skilled talent for their teams
          </p>
        </div>

        {/* First row: scroll left to right */}
        <div className="relative overflow-hidden mb-12">
          <div className="animate-scroll-right flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md flex items-center justify-center h-32 min-w-[170px]"
              >
                <span className="text-gray-700 font-semibold text-sm text-center">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row: scroll right to left */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll-left flex whitespace-nowrap gap-6">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="bg-white rounded-xl p-6 border border-teal-100 hover:border-teal-200 transition-all duration-300 hover:shadow-md flex items-center justify-center h-32 min-w-[170px]"
              >
                <span className="text-gray-700 font-semibold text-sm text-center">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link to={"/contact"}>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Join Us
          </button>
          </Link>
        </div>
      </div>

      {/* CSS animation styles */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HiringPartners;

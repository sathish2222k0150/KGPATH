
const PlacementSupport = () => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Additional support info */}
        <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
            Placement Assistance
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our commitment doesn't end with course completion. We provide ongoing support throughout your career journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Career Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Industry Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">5000+</div>
                <div className="text-gray-600 font-medium">Job Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSupport;
import { partners } from '../Data/partners';

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">Trusted by 500+ Brands</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
          {partners.slice(0, 5).map((partner, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
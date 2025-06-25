export default function NewsletterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-8">Get updates on new batches, courses, and exclusive offers</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
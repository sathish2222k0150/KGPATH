import QualityEdcation from '../../assets/Quality Education.png';
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Transforming Lives Through 
                <span className="text-teal-600"> Quality Education</span>
              </h2>
              <p className="text-lg text-gray-600">
               Though newly founded, KG PATH is driven by a bold mission: to equip passionate learners with the most in-demand digital skills — from Full-Stack Development to AI and Cloud Computing — and guide them confidently toward career success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                <p className="text-gray-600">
                  To make quality tech education accessible to everyone and bridge the digital skills gap by delivering hands‑on, industry-relevant training in Full-Stack Development, AI & ML, and Cloud Computing.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  To become a globally recognized platform for professional skill development — empowering learners to transform their careers and shape the future of technology.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">5+</div>
                <div className="text-sm text-gray-600">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">100%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={QualityEdcation} 
              alt="Students learning together" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
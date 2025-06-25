import { useState } from "react";
import { 
  Facebook, 
  Instagram, 
  Linkedin,  
  GraduationCap, 
  Upload, 
  Send, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
    <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-40 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              <span className="text-orange-600">Launch Your</span>   <span className="text-teal-500">Dream Tech Career</span> 
              </h1>
            <p className="text-xl text-black  opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of successful graduates who landed their dream jobs at top tech companies through our industry-leading placement programs.
            </p>
           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="bg-orange-500 backdrop-blur-sm rounded-xl px-8 py-4 w-full sm:w-64 text-white">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Users className="w-5 h-5" />
                <span className="text-xl font-bold">50+</span>
              </div>
              <p className="text-sm opacity-90 text-center">Students Placed</p>
            </div>

            <div className="bg-orange-500  backdrop-blur-sm rounded-xl px-8 py-4 w-full sm:w-64 text-white">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Award className="w-5 h-5" />
                <span className="text-xl font-bold">100+</span>
              </div>
              <p className="text-sm opacity-90 text-center">Partner Companies</p>
            </div>

            <div className="bg-orange-500 backdrop-blur-sm rounded-xl px-8 py-4 w-full sm:w-64 text-white">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <TrendingUp className="w-5 h-5" />
                <span className="text-xl font-bold">100%</span>
              </div>
              <p className="text-sm opacity-90 text-center">Placement Rate</p>
            </div>
          </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Info */}
            <div className="space-y-8">
              <div className="bg-gradient-primary p-8 rounded-3xl text-white">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-lg opacity-90 mb-2">Looking for a career partner?</p>
                <p className="text-lg opacity-90">You found one.</p>
                
                <div className="flex space-x-4 mt-6">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                    <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff" }} />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What will be next step?</h3>
                <p className="text-gray-600 mb-8">You are one step closer to build your perfect career</p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">We'll prepare a proposal</h4>
                      <p className="text-gray-600 text-sm">Required scope, timeline and approximate budget will be included if you provide us with detailed information about a project.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Together we discuss it</h4>
                      <p className="text-gray-600 text-sm">Let's get acquainted and discuss all the possible variants and options. Google Hangouts or Skype usually works great!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Let's start building</h4>
                      <p className="text-gray-600 text-sm">When the contract is signed, and all parties agree on the budget, timing, and deliverables, we can start building your dream career.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <div className="bg-gradient-primary p-4 rounded-2xl mb-6 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Write us a few words about your career goals and we'll</p>
                    <p className="text-white font-medium">prepare a proposal for you within <strong>24 hours</strong>.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all peer"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all"
                        placeholder="Your e-mail"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all"
                        placeholder="Current Company"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all"
                        placeholder="Course Interest"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-700 font-medium mb-3">Optional</h4>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all resize-none"
                      placeholder="Project details"
                    ></textarea>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-teal-400 transition-all cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">DROP IT LIKE IT'S HOT</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-secondary text-white font-semibold py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Send</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-4">
                  If you have any doubts or questions, feel free to contact us at{' '}
                  <a href="mailto:contact@placement.co" className="text-teal-600 hover:text-teal-700">
                    info@kgpath.org 
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard
              icon={Phone}
              title="Call Us"
              content="+91 7397788 918/917/915"
              action="Call Now"
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              content="info@kgpath.org"
              action="Send Email"
            />
            <ContactCard
              icon={MapPin}
              title="Visit Us"
              content="3rd Floor, KG Garden City Mall, Vedapatti, CBE"
              action="Get Directions"
            />
            <ContactCard
              icon={Clock}
              title="Office Hours"
              content="Mon-Fri: 9 AM - 5 PM"
            />
          </div>
        </div>
      </section>
      {/* Centered Horizontal Map Section */}
      <section className="py-10 bg-gray-50 ml-24">
        <div className="max-w-4xl mx-auto px-4 ml-12">
          <div className="w-[1350px] h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.602470331089!2d76.90760687515994!3d10.99334868916887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f250592aecb%3A0xeb18b8ce5a4b0711!2sSharadha%20Skill%20Academy!5e0!3m2!1sen!2sin!4v1747714515510!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharadha Skill Academy Location"
            ></iframe>
          </div>
        </div>
      </section>
      {/* WhatsApp Float Button */}
      

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Start Your <span className="text-teal-600">Tech Journey?</span> 
          </h2>
          <p className="text-xl text-black opacity-90 mb-8">
            Join thousands of successful graduates. Your dream job is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 pulse-button">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
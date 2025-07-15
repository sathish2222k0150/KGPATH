import { useState, useEffect } from "react";
import { 
  Facebook, 
  Instagram, 
  Linkedin,  
  GraduationCap, 
  Send, 
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contact from '../../assets/contact.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true); // start loader

  try {
    const res = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Your message was sent successfully!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: ""
      });
    } else {
      alert(data.message || 'Failed to send your message');
    }
  } catch (error) {
    console.error('Submit error:', error);
    alert('Something went wrong, please try again later.');
  } finally {
    setLoading(false); // stop loader
  }
};


  return (
    <>
    {/* Hero Section */}
    <section className="relative bg-cover bg-center bg-no-repeat py-40 px-4" 
      style={{ backgroundImage: `url(${contact})` }}
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          <span className="text-orange-600">Launch Your</span> <span className="text-teal-500">Dream Tech Career</span>
        </h1>
        <p className="text-xl text-black opacity-90 mb-8 max-w-3xl mx-auto">
          Join thousands of successful graduates who landed their dream jobs at top tech companies through our industry-leading placement programs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300">
            Schedule Free Consultation
          </button>
          <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
            Download Brochure
          </button>
        </div>
      </div>
    </section>

    {/* Contact Cards */}
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
            icon={Phone}
            title="Call Us"
            content="+91 7397788 918/917/915"
            action="Call Now"
            href="tel:+917397788918"
          />
          <ContactCard
            icon={Mail}
            title="Email Us"
            content="info@kgpath.org"
            action="Send Email"
            href="mailto:info@kgpath.org"
          />
          <ContactCard
            icon={MapPin}
            title="Visit Us"
            content="3rd Floor, KG Garden City Mall, Vedapatti, CBE"
            action="Get Directions"
            href="https://maps.google.com/?q=KG+Garden+City+Mall+Vedapatti+CBE"
          />
          <ContactCard
            icon={Clock}
            title="Office Hours"
            content="Mon-Fri: 9 AM - 5 PM"
          />
        </div>
      </div>
    </section>

    {/* Form & Steps */}
    <section className="py-20 bg-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-gradient-primary p-8 rounded-3xl text-white" data-aos="fade-right">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg opacity-90 mb-2">Looking for a career partner?</p>
              <p className="text-lg opacity-90">You found one.</p>
              <div className="flex space-x-4 mt-6">
                {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                  <div key={idx} className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all cursor-pointer">
                  <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff" }} />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl space-y-6" data-aos="fade-right">
              {[
                { step: "1", title: "We'll prepare a proposal", desc: "Required scope, timeline and approximate budget will be included if you provide us with detailed information about a project." },
                { step: "2", title: "Together we discuss it", desc: "Let's get acquainted and discuss all the possible variants and options. Google Hangouts or Skype usually works great!" },
                { step: "3", title: "Let's start building", desc: "When the contract is signed, and all parties agree on the budget, timing, and deliverables, we can start building your dream career." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div data-aos="fade-left">
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
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all"
                    placeholder="Phone number"
                  />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all"
                    required
                  >
                    <option value="">Select Course Interest</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="AI & ML">AI & ML</option>
                    <option value="Cloud Architect">Cloud Architect</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Data Science">Data Science</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-4 bg-white rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-all resize-none"
                  placeholder="Message"
                ></textarea>
                <button
              type="submit"
              disabled={loading}
              className={`w-full bg-gradient-secondary text-white font-semibold py-4 px-6 rounded-xl 
                hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 
                ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Your Message</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
              </form>
              <p className="text-center text-gray-500 text-sm mt-4">
                If you have any doubts, email us at{' '}
                <a href="mailto:info@kgpath.org" className="text-teal-600 hover:text-teal-700">info@kgpath.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Map */}
    <section className="bg-gray-50" data-aos="fade-up">
      <div className="w-full mx-auto px-4 lg:px-0">
        <div className="relative overflow-hidden shadow-lg rounded-2xl h-64 md:h-80 lg:h-[420px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.602470331089!2d76.90760687515994!3d10.99334868916887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f250592aecb%3A0xeb18b8ce5a4b0711!2sSharadha%20Skill%20Academy!5e0!3m2!1sen!2sin!4v1747714515510!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Sharadha Skill Academy Location"
          ></iframe>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactPage;

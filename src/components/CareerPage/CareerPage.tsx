import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  MapPin, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Heart, 
  Coffee, 
  Plane, 
  GraduationCap,
  Mail,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import career from '../../assets/career.png';

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resume: File | null;
  coverLetter: string;
}

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
  requirements: string[];
}

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  const jobs: Job[] = [
    {
    id: 1,
    title: "Full Stack Trainer",
    location: "Coimbatore, TN",
    type: "Full-time",
    department: "Training & Development",
    description: "Looking for an experienced Full Stack Developer to mentor students in modern web technologies through hands-on training and real-time projects.",
    requirements: [
      "Strong knowledge of HTML, CSS, JavaScript, React, Node.js",
      "Minimum 3+ years of development experience",
      "Prior teaching or mentoring experience preferred",
      "Good communication and presentation skills"
    ]
  },
  {
    id: 2,
    title: "AI & ML Trainer",
    location: "Chennai, TN",
    type: "Full-time",
    department: "Training & Development",
    description: "Deliver engaging sessions on Artificial Intelligence and Machine Learning to help students build real-world AI solutions.",
    requirements: [
      "Expertise in Python, Machine Learning algorithms, and AI frameworks",
      "Experience with tools like TensorFlow, Keras, or PyTorch",
      "2+ years of teaching or industry experience",
      "Strong understanding of statistics and data analysis"
    ]
  },
  {
    id: 3,
    title: "Cloud Architect Trainer",
    location: "Remote",
    type: "Part-time / Contract",
    department: "Training & Development",
    description: "Seeking a Cloud Architect with strong industry expertise to train students in cloud infrastructure, services, and best practices.",
    requirements: [
      "Hands-on experience with AWS, Azure, or Google Cloud",
      "Cloud certifications preferred (e.g., AWS Solutions Architect)",
      "Strong knowledge of DevOps tools and CI/CD pipelines",
      "Effective teaching and curriculum-building skills"
    ]
  }
  ];

  const benefits: Benefit[] = [
    { icon: <Heart className="w-6 h-6" />, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage" },
    { icon: <Coffee className="w-6 h-6" />, title: "Flexible Hours", description: "Work-life balance with flexible scheduling" },
    { icon: <Plane className="w-6 h-6" />, title: "Paid Time Off", description: "25 days PTO plus holidays and sick leave" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Learning Budget", description: "$2000 annual budget for courses and conferences" },
    { icon: <Users className="w-6 h-6" />, title: "Team Events", description: "Regular team building and company outings" },
    { icon: <Award className="w-6 h-6" />, title: "Performance Bonus", description: "Quarterly bonuses based on individual and team performance" }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "The learning opportunities here are incredible. I've grown more in 2 years than I did in my previous 5 years of experience."
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "The collaborative culture and cutting-edge projects make this the best place I've worked. Truly innovative environment."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "Amazing work-life balance and supportive team. The company really invests in its people and their growth."
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "What is the application process?",
      answer: "Our process includes: Application submission → Initial screening → Technical/skills interview → Final interview → Offer. The entire process typically takes 2-3 weeks."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes! We offer flexible work arrangements including fully remote, hybrid, and in-office options depending on the role and team needs."
    },
    {
      question: "What learning opportunities are available?",
      answer: "We provide a $2000 annual learning budget, access to online courses, conference attendance, internal mentorship programs, and regular tech talks."
    },
    {
      question: "What benefits do you offer?",
      answer: "We offer comprehensive health insurance, 25 days PTO, flexible hours, learning budget, performance bonuses, and many other perks."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      position: '', 
      experience: '', 
      resume: null, 
      coverLetter: '' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom CSS for animations */}
      <style>{`
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-gradient-primary {
          background: linear-gradient(135deg, #14b8a6 0%, #0891b2 100%);
        }
        
        .bg-gradient-secondary {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        }
        
        .course-card {
          transition: all 0.3s ease;
        }
        
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .job-card {
          transition: all 0.3s ease;
        }
        
        .job-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .pulse-button {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    {/* Hero Section */}
     <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-32 min-h-screen">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 h-full items-center">

      {/* Left Column */}
      <div className="flex flex-col justify-between h-full space-y-10 animate-on-scroll">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Build Your Future <span className="bg-clip-text text-teal-600">With Us</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join a team of innovators, learners, and creators. Explore exciting career opportunities and grow with us in a supportive, cutting-edge environment.
          </p> {/* ⬅️ Why Join Us box (moved here) */}
       <div className="bg-gradient-to-br from-teal-50 p-6 rounded-2xl hover:shadow-lg -ml-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 -mt-5">Why Join Us?</h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Collaborative and inclusive culture",
                  "Growth through learning programs",
                  "Flexible & hybrid work model",
                  "Rewards for high performance",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-600 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          <div className="flex flex-col sm:flex-row gap-9 mt-6">
            <button 
              onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 pulse-button"
            >
              View Open Positions
            </button>
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>  
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-between h-full space-y-10 animate-on-scroll mt-19">
        <div className="w-full">
          <img 
            src={career}
            alt="Team collaboration" 
            className="rounded-2xl shadow-2xl w-full object-cover mt-1"
          />
        </div>
      </div>
    </div>
  </div>
</section>



      

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-50" id="culture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of education technology with a team-first culture that values innovation, learning, and personal growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="bg-gradient-primary p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
              <p className="text-gray-600">Work with passionate professionals who support each other's growth and celebrate shared successes.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="bg-gradient-secondary p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600">Stay ahead with cutting-edge technologies and generous learning budgets for conferences and courses.</p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Focus</h3>
              <p className="text-gray-600">Shape the future of education with innovative projects that make a real impact on learners worldwide.</p>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold text-teal-600 mb-2">20+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Employee Satisfaction</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold text-teal-600 mb-2">5.0★</div>
              <div className="text-gray-600">Glassdoor Rating</div>
            </div>
            <div className="animate-on-scroll">
              <div className="text-4xl font-bold text-orange-600 mb-2">2+</div>
              <div className="text-gray-600">Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white" id="jobs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Join our team and help us shape the future of education technology</p>
          </div>
          
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className={`job-card bg-white rounded-xl p-6 border shadow-sm hover:shadow-lg animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8 flex flex-col sm:flex-row lg:flex-col gap-3">
                    <button 
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                      className="px-6 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => {
                        setFormData({...formData, position: job.title});
                        setShowApplicationForm(true);
                      }}
                      className="px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
                
                {selectedJob === job.id && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Detailed Requirements:</h4>
                    <ul className="space-y-1 text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-teal-600" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-20 bg-gray-50" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600">We invest in our people with comprehensive benefits and meaningful perks</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 animate-on-scroll`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary p-4 rounded-xl w-fit mb-6 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Team Says</h2>
            <p className="text-xl text-gray-600">Hear from our employees about their experience working with us</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 p-8 rounded-2xl animate-on-scroll`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Our streamlined hiring process designed to find the perfect fit</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Apply", description: "Submit your application and resume online" },
              { step: 2, title: "Screen", description: "Initial phone/video screening with HR" },
              { step: 3, title: "Interview", description: "Technical and cultural fit interviews" },
              { step: 4, title: "Offer", description: "Receive offer and join our team!" }
            ].map((item, index) => (
              <div key={index} className={`text-center animate-on-scroll`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about working with us</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`border border-gray-200 rounded-lg animate-on-scroll`} style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Take the next step in your career journey. We're excited to meet talented individuals who share our passion for innovation and learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 pulse-button"
              >
                Apply Now
              </button>
              <a 
                href="mailto:careers@techedu.com"
                className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact HR
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Apply for Position</h3>
                <button 
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Position *</label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select Position</option>
                      {jobs.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume *</label>
                 <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setFormData({ ...formData, resume: file });
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <p className="text-sm text-gray-500 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                  <textarea
                    rows={4}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({...formData, coverLetter: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    Submit Application
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowApplicationForm(false)}
                    className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;